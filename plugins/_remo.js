import { Blob } from 'node:buffer';
import { FormData } from 'formdata-node';
import fetch from 'node-fetch';

let cooldown = new Set()

let handler = async (m, { conn, usedPrefix, command }) => {
    // Anti spam 10 seg
    if (cooldown.has(m.sender)) return m.reply('🍓 *Ñam~* Espera 10 seg para usar otra fresita')
    cooldown.add(m.sender)
    setTimeout(() => cooldown.delete(m.sender), 10000)

    let q = m.quoted? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';

    if (!mime) throw `🍓 *Bot Fresita* ✨\n\n*Ñam~* Responde a una foto con *${usedPrefix + command}* y le quito el fondo bien dulce`;
    if (!/image\/(jpe?g|png)/.test(mime)) {
        throw `🍓 *Formato no soportado.* Solo JPG/PNG. Nada de stickers podridos`;
    }

    const API_KEY = "FEx4CYmYN1QRQWD1mbZp87jV";

    await m.react('🍓');
    await m.reply('✨ *Bot Fresita lavando tu foto con juguito...*');

    try {
        let img = await q.download();
        if (!img) throw '❌ *Ayy* No pude agarrar la imagen';
        if (img.length > 12 * 1024 * 1024) throw '❌ *Esta fresita está muy grande.* Máximo 12MB';

        let base64Img = img.toString('base64');
        
        let form = new FormData();
        form.append('image_file_b64', base64Img);
        form.append('size', 'auto');

        let res = await fetch('https://api.remove.bg/v1.0/removebg', {
            method: 'POST',
            headers: {
                'X-Api-Key': API_KEY
            },
            body: form
        });

        if (!res.ok) {
            if (res.status === 402) throw '🍓 *Se me acabaron las fresitas...* Créditos agotados';
            let errorText = await res.text();
            throw `❌ Error ${res.status}: ${errorText}`;
        }

        let processedImg = await res.buffer();

        await conn.sendFile(
            m.chat,
            processedImg,
            'bot_fresita.png',
            '✨ *Fondo eliminado con éxito* ✨\n\n🍓 *Bot Fresita | Dulce y Deliciosa*\n*Ñam gracias por usarme~*',
            m
        );

        await m.react('✅');

    } catch (error) {
        console.error('Bot Fresita Error:', error);
        await m.reply(`${error}`);
        await m.react('🥺');
    }
};

handler.help = ['removebg', 'quitafondo'];
handler.tags = ['tools'];
handler.command = ['removebg', 'quitafondo', 'nobg', 'rmbg', 'fresanobg'];
handler.register = false;

export default handler;