let handler = async (m, { conn }) => {
    try {
        await conn.groupParticipantsUpdate(m.chat, [conn.user.jid], 'promote')
        m.reply(`╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 👑 *AUTOPROMOTE*
│
│ ✅ *Estado:* Admin asignado
│ 🍰 *La fresita toma el control*
╰─────────────────❒`)
    } catch (e) {
        m.reply(`╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ ❌ *ERROR AUTOPROMOTE*
│
│ ⚠️ *No pude asignarme admin*
│ 🌸 *Dame permisos primero*
╰─────────────────❒`)
    }
}

handler.help = ['autoadmin']
handler.tags = ['owner']
handler.command = ['autoadmin']
handler.rowner = true

export default handler