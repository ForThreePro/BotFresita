let handler = async (m, { conn }) => {
    try {
        let link = await conn.groupInviteCode(m.chat)
        let text = `⛈️ *RAYO PREM* ➔ LINK DEL GRUPO 🌙\n\n⚡ https://chat.whatsapp.com/${link}\n\n🌙 *Team Nightwish*` // Cambiado
        m.reply(text)
    } catch {
        m.reply(`⛈️ *RAYO PREM ERROR* ➔ No pude obtener el link. ¿Soy admin?`) // Cambiado
    }
}

handler.help = ['link']
handler.tags = ['grupos']
handler.command = ['link', 'linkgroup']
handler.group = true
handler.botAdmin = true

export default handler