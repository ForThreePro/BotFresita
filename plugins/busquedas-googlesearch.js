import axios from 'axios'

let handler = async (m, { conn, text }) => {
    if (!text) return m.reply(`╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🔍 *GOOGLE SEARCH*
│
│ 🌸 *¿Qué deseas buscar?*
│ 🍰 *Uso:*.google Fresita Bot
╰─────────────────❒`)

    await m.react('🔍')

    try {
        let { data } = await axios.get(`https://api.delirius.store/search/google?query=${encodeURIComponent(text)}`)
        let results = data.data.slice(0, 5)

        if (!results.length) return m.reply(`╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ ❌ *SIN RESULTADOS*
│
│ 🍰 *No se encontró nada sobre:* ${text}
╰─────────────────❒`)

        let txt = `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🔍 *RESULTADOS DE BÚSQUEDA*
│
│ 🌸 *Consulta:* ${text}
╰─────────────────❒\n\n`

        txt += results.map((v, i) => {
            return `╭─── 🍓 *RESULTADO ${i + 1}* ───╮
│ 📌 *${v.title}*
│ 📝 ${v.description}
│ 🔗 ${v.url}
╰───────────────────╯`
        }).join('\n\n')

        txt += `\n\n> *“La dulzura del conocimiento fresita”* 🍰\n> *© Fresita Bot*`

        await conn.reply(m.chat, txt, m)
        await m.react('✅')

    } catch (e) {
        console.error(e)
        await m.react('❌')
        m.reply(`╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🍓 *ERROR*
│
│ 🍰 *Falló la búsqueda*
│ 🌸 *Intenta de nuevo*
╰─────────────────❒`)
    }
}

handler.help = ['google <busqueda>']
handler.tags = ['search']
handler.command = /^google$/i

export default handler