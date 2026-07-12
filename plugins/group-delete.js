let handler = async (m, { conn, usedPrefix, command }) => {

if (!m.quoted) return conn.reply(m.chat, `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🗑️ *ELIMINAR MENSAJE*
│
│ 🌸 *Responde al mensaje que deseas borrar*
╰─────────────────❒`, m)

try {
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
conn.reply(m.chat, `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🗑️ *MENSAJE ELIMINADO*
│
│ 🍰 *Acción por:* @${m.sender.split('@')[0]}
│ 🌸 *Juicio de fresita aplicado*
╰─────────────────❒`, m, { mentions: [m.sender] })
 } catch {
await conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
conn.reply(m.chat, `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🗑️ *MENSAJE ELIMINADO*
│
│ 🍰 *Acción por:* @${m.sender.split('@')[0]}
│ 🌸 *Juicio de fresita aplicado*
╰─────────────────❒`, m, { mentions: [m.sender] })
}
}

handler.help = ['delete']
handler.tags = ['grupos']
handler.command = /^del(ete)?$/i
handler.admin = true
handler.botAdmin = true

export default handler