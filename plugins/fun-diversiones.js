let handler = async (m, { conn, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0]? m.mentionedJid[0]
          : m.quoted? m.quoted.sender
          : m.sender;

  let name = await conn.getName(who);
  let userTarget = m.mentionedJid && m.mentionedJid[0]? `@${who.split('@')[0]}` : name;
  let porcentaje = Math.floor(Math.random() * 500) + 1;

  let respuestas = {
    'gay': `🍓 *FRESITA BOT SCANNER* 🍰\n\n🌸 *${userTarget}* *ES 🏳️‍🌈* *${porcentaje}%* *GAY*\n🍰 *Fresita Bot*`,
    'lesbiana': `🍓 *FRESITA BOT SCANNER* 🍰\n\n🌸 *${userTarget}* *ES 🏳️‍🌈* *${porcentaje}%* *LESBIANA*\n🍰 *Fresita Bot*`,
    'pajero': `🍓 *FRESITA BOT SCANNER* 🍰\n\n🌸 *${userTarget}* *ES 😏💦* *${porcentaje}%* *PAJERO*\n🍰 *Fresita Bot*`,
    'pajera': `🍓 *FRESITA BOT SCANNER* 🍰\n\n🌸 *${userTarget}* *ES 😏💦* *${porcentaje}%* *PAJERA*\n🍰 *Fresita Bot*`,
    'puto': `🍓 *FRESITA BOT SCANNER* 🍰\n\n🌸 *${userTarget}* *ES* *${porcentaje}%* *PUTO*\n🔥 *MÁS INFORMACIÓN A SU PRIVADO* 🔥🥵\n🍰 *Fresita Bot*`,
    'puta': `🍓 *FRESITA BOT SCANNER* 🍰\n\n🌸 *${userTarget}* *ES* *${porcentaje}%* *PUTA*\n🔥 *MÁS INFORMACIÓN A SU PRIVADO* 🔥🥵\n🍰 *Fresita Bot*`,
    'manco': `🍓 *FRESITA BOT SCANNER* 🍰\n\n🌸 *${userTarget}* *ES* *${porcentaje}%* *MANCO* 💩\n🍰 *Fresita Bot*`,
    'manca': `🍓 *FRESITA BOT SCANNER* 🍰\n\n🌸 *${userTarget}* *ES* *${porcentaje}%* *MANCA* 💩\n🍰 *Fresita Bot*`,
    'rata': `🍓 *FRESITA BOT SCANNER* 🍰\n\n🌸 *${userTarget}* *ES* *${porcentaje}%* *RATA* 🐁 *COME QUESO* 🧀\n🍰 *Fresita Bot*`,
    'prostituto': `🍓 *FRESITA BOT SCANNER* 🍰\n\n🌸 *${userTarget}* *ES* *${porcentaje}%* *PROSTITUTO* 🫦👅\n❓ *¿QUIÉN QUIERE DE SUS SERVICIOS?*\n🍰 *Fresita Bot*`,
    'prostituta': `🍓 *FRESITA BOT SCANNER* 🍰\n\n🌸 *${userTarget}* *ES* *${porcentaje}%* *PROSTITUTA* 🫦👅\n❓ *¿QUIÉN QUIERE DE SUS SERVICIOS?*\n🍰 *Fresita Bot*`
  }

  let respuestaFinal = respuestas[command.toLowerCase()];

  if (respuestaFinal) {
    await conn.sendMessage(m.chat, {
      text: respuestaFinal,
      mentions: [who]
    }, { quoted: m });
  }
}

handler.help = ['gay', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map((v) => v + " *@user*")
handler.tags = ['fun']
handler.command = /^(gay|lesbiana|pajero|pajera|puto|puta|manco|manca|rata|prostituta|prostituto)$/i

export default handler