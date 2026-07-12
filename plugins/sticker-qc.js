import { sticker } from '../lib/sticker.js'
import axios from 'axios'

const handler = async (m, { conn, args }) => {
    let mentionedJid = m.mentionedJid && m.mentionedJid[0]? m.mentionedJid[0] : null;
    let authorName, text, pp;

    if (!args.length &&!(m.quoted && m.quoted.text)) {
        throw "🍓 *FRESITA BOT* ➔ Ingresa un texto para crear tu *quotly*.\n\n> Ejemplo:.qc Hola mundo\n> Ejemplo:.qc @user Nombre / Hola\n> Ejemplo:.qc Nombre / Hola";
    }

    // 🔹 Caso extendido:.qc @user NombreAutor / Texto
    if (mentionedJid && args.join(" ").includes("/")) {
        const joined = args.slice(1).join(" ");
        const [authorNameRaw,...textParts] = joined.split("/");
        authorName = authorNameRaw?.trim() || "Anónimo";
        text = textParts.join("/").trim();
        pp = await conn.profilePictureUrl(mentionedJid, 'image').catch(_ => 'https://files.catbox.moe/6w3x2p.jpg');
    }
    // 🔹 Caso nuevo:.qc NombreAutor / Texto → usa foto fija fresita
    else if (!mentionedJid && args.join(" ").includes("/")) {
        const joined = args.join(" ");
        const [authorNameRaw,...textParts] = joined.split("/");
        authorName = authorNameRaw?.trim() || "Anónimo";
        text = textParts.join("/").trim();
        // 📌 Foto fija Fresita Bot
        pp = "https://files.evogb.win/91Vvmc.jpg"; // Cambia por tu imagen fresita si quieres
    }
    // 🔹 Caso simple:.qc <texto>
    else if (!mentionedJid && args.length >= 1) {
        text = args.join(" ");
        try {
            authorName = await conn.getName(m.sender);
        } catch {
            authorName = "Anónimo";
        }
        pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://files.evogb.win/91Vvmc.jpg');
    }
    // 🔹 Caso citado
    else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
        try {
            authorName = await conn.getName(m.sender);
        } catch {
            authorName = "Anónimo";
        }
        pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://files.evogb.win/91Vvmc.jpg');
    }
    else {
        return conn.reply(m.chat, "🍓 *FRESITA BOT* ➔ Formato inválido.\n\n> Usa:.qc Hola mundo\n> Usa:.qc @user Nombre / Texto\n> Usa:.qc Nombre / Texto", m);
    }

    if (!text) return conn.reply(m.chat, '🍓 *FRESITA BOT* ➔ Ingresa un texto para el sticker.', m)
    if (text.length > 30) return conn.reply(m.chat, '🍓 *FRESITA BOT* ➔ Máximo 30 caracteres. La fresita es breve.', m)

    const obj = {
        "type": "quote",
        "format": "png",
        "backgroundColor": "#FF69B4", // Rosa fresita
        "width": 512,
        "height": 768,
        "scale": 2,
        "messages": [{
            "entities": [],
            "avatar": true,
            "from": {
                "id": 1,
                "name": authorName || "Anónimo",
                "photo": { "url": pp }
            },
            "text": text,
            "replyMessage": {}
        }]
    };

    await conn.sendMessage(m.chat, { react: { text: "🍓", key: m.key } })

    try {
        const json = await axios.post('https://btzqc.betabotz.eu.org/generate', obj, {
            headers: { 'Content-Type': 'application/json' }
        });

        const buffer = Buffer.from(json.data.result.image, 'base64');
        const stiker = await sticker(buffer, false, 'Fresita Bot', 'Whois Yallico'); // Marca cambiada

        if (stiker) {
            await conn.sendFile(m.chat, stiker, 'FresitaBot.webp', '🍓 *Fresita Bot* | Quotly', m); // Caption cambiada
            await conn.sendMessage(m.chat, { react: { text: "🌸", key: m.key } })
        } else {
            await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } })
        }
    } catch (e) {
        console.error(e);
        await conn.reply(m.chat, "🍓 *FRESITA BOT ERROR* ➔ Falló al generar el sticker. Intenta de nuevo.", m);
        await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } })
    }
}

handler.help = ['qc']
handler.tags = ['sticker']
handler.command = ['quotly', 'qc']

export default handler