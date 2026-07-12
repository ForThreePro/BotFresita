const handler = async (m, { conn, command }) => {
  if (!m.mentionedJid[0] &&!m.quoted) {
    let texto = `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🛡️ *CONTROL DE ADMIN*
│
│ 🌸 *Menciona o responde al usuario*
│ 🍰 *para ${command === 'promote' || command === 'promover' || command === 'daradmin'? 'promover' : 'degradar'} como administrador*
╰─────────────────❒`
    return m.reply(texto, m.chat, { mentions: conn.parseMention(texto) })
  }

  let user = m.mentionedJid[0]? m.mentionedJid[0] : m.quoted.sender
  let action = /^(promote|promover|daradmin)$/i.test(command)? 'promote' : 'demote'

  let msgAccion = action === 'promote'
  ? `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🍰 *PROMOCIÓN*
│
│ 👑 *@${user.split('@')[0]} ahora es Administrador*
│ 🌸 *Acción por:* @${m.sender.split('@')[0]}
│
│ > *“Fresita le otorga un dulcecito de poder”* 🍓
╰─────────────────❒`
    : `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🍰 *DEGRADACIÓN*
│
│ 🛡️ *@${user.split('@')[0]} ya no es Administrador*
│ 🌸 *Acción por:* @${m.sender.split('@')[0]}
│
│ > *“Fresita retira el dulcecito”* 🍰
╰─────────────────❒`

  await conn.groupParticipantsUpdate(m.chat, [user], action)
  m.reply(msgAccion, m.chat, { mentions: [user, m.sender] })
}

handler.help = ['promote', 'demote']
handler.tags = ['grupos']
handler.command = /^(promote|promover|daradmin|demote|degradar|quitaradmin)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler