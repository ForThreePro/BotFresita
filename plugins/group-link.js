let handler = async (m, { conn }) => {
    try {
        let link = await conn.groupInviteCode(m.chat)
        let text = `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🔗 *LINK DE LA CASITA*
│
│ 🌸 https://chat.whatsapp.com/${link}
│
│ > *“Comparte con dulzura fresita”* 🍰
╰─────────────────❒`
        m.reply(text)
    } catch {
        m.reply(`╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🍰 *ERROR*
│
│ 🌸 *No pude obtener el link*
│ 🍓 *¿Soy administrador de la casita?*
╰─────────────────❒`)
    }
}

handler.help = ['link']
handler.tags = ['grupos']
handler.command = ['link', 'linkgroup']
handler.group = true
handler.botAdmin = true

export default handler