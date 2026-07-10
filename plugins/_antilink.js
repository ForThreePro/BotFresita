const linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
const channelLinkRegex = /whatsapp\.com\/channel\/([0-9A-Za-z]{20,30})/i

const handler = async (m, { conn, args, isAdmin, isOwner }) => {
    if (!isAdmin &&!isOwner) throw "⛈️ *RAYO PREM ERROR* ➔ *Solo los administradores pueden usar este comando.*" // Cambiado

    let chat = global.db.data.chats[m.chat]
    if (!chat) global.db.data.chats[m.chat] = {}

    if (/on/i.test(args[0])) {
        chat.antiLink = true
        await conn.reply(m.chat, "⛈️ *RAYO PREM ANTI-LINK* 🌙\n\n⚡ *ANTI-LINK ACTIVADO*\n\n🌩️ *Ahora se eliminarán links de grupos y canales*\n⛈️ *Team Nightwish*", m) // Cambiado
    } else if (/off/i.test(args[0])) {
        chat.antiLink = false
        await conn.reply(m.chat, "⛈️ *RAYO PREM ANTI-LINK* 🌙\n\n❌ *ANTI-LINK DESACTIVADO*\n\n🌩️ *Ya se pueden enviar links*", m) // Cambiado
    } else {
        await conn.reply(m.chat, `⛈️ *RAYO PREM ANTI-LINK* 🌙\n\n📌 *Uso:* *.antilink on* / *.antilink off*\n⚡ *Bloquea links de grupos y canales*`, m) // Cambiado
    }
}

handler.help = ['antilink <on/off>']
handler.tags = ['config']
handler.command = /^(antilink|antilinks)$/i

handler.before = async function (m, { conn, isAdmin, isBotAdmin }) {
    if (!m.isGroup) return!0
    const botNumber = conn.user.jid
    if (m.sender === botNumber || m.fromMe || m.isBaileys) return!0

    const chat = global.db.data.chats[m.chat]
    if (!chat?.antiLink) return!0

    const isGroupLink = linkRegex.exec(m.text)
    const isChannelLink = channelLinkRegex.exec(m.text)

    if ((isGroupLink || isChannelLink) &&!isAdmin) {
        if (!isBotAdmin) return!0

        // Permite el link del propio grupo
        if (isGroupLink) {
            const groupCode = await conn.groupInviteCode(m.chat).catch(() => null)
            if (groupCode && m.text.includes(groupCode)) return!0
        }

        await conn.sendMessage(m.chat, { delete: m.key })
        await conn.reply(
            m.chat,
            `⛈️ *RAYO PREM ANTI-LINK* 🌙\n\n⚡ *¡ENLACE PROHIBIDO!*\n\n🚮 *@${m.sender.split('@')[0]}* fue eliminado por enviar links.\n\n> *Regla:* Nada de spam externo ⚡`, // Cambiado
            m,
            { mentions: [m.sender] }
        )
        return await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
    return!0
}

export default handler