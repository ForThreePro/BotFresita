let handler = async (m, { conn, isOwner, isAdmin, isROwner, command }) => {
  if (!m.isGroup) return
  let chat = global.db.data.chats[m.chat]
  let type = command.toLowerCase()

  if (!(isAdmin || isOwner || isROwner)) {
    global.dfail('admin', m, conn)
    return
  }

  switch (type) {
    case 'banchat': case 'banearchat':
      if (chat.isBanned) return m.reply(`╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🍰 *ESTADO DE LA CASITA*
│
│ 🌸 *Esta casita ya se encuentra baneada*
│ 🍓 *El bot está inactivo aquí*
╰─────────────────❒`)
      chat.isBanned = true
      await conn.reply(m.chat, `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🚫 *CASITA BANEADA*
│
│ 🍰 *El bot ha sido desactivado en esta casita*
│ 🌸 *No responderé a ningún comando*
│ 🍓 *Desbaneen para reactivarme*
╰─────────────────❒`, m)
      break

    case 'unbanchat': case 'desbanearchat':
      if (!chat.isBanned) return m.reply(`╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ ✅ *ESTADO DE LA CASITA*
│
│ 🍰 *Esta casita no está baneada*
│ 🌸 *El bot está activo*
╰─────────────────❒`)
      chat.isBanned = false
      await conn.reply(m.chat, `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ ✅ *CASITA DESBANEADA*
│
│ 🍰 *El bot vuelve a estar activo*
│ 🌸 *Todos los comandos disponibles*
│ 🍓 *Fresita ha regresado a la casita*
╰─────────────────❒`, m)
      break

    default:
      return
  }
}

handler.help = ['banchat', 'unbanchat']
handler.tags = ['grupos']
handler.command = /^(banchat|banearchat|unbanchat|desbanearchat)$/i

export default handler