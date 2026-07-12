let handler = async (m, { conn, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0]? m.mentionedJid[0]
          : m.quoted? m.quoted.sender
          : m.sender;

  let name = await conn.getName(who);
  let userTarget = m.mentionedJid && m.mentionedJid[0]? `@${who.split('@')[0]}` : name;
  let porcentaje = Math.floor(Math.random() * 500) + 1;

  let respuestas = {
    //... aquí van todos los 52 anteriores...

    // NUEVOS 3
    'cornudo': `🍓 *『 𝐁𝐎𝐓 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 』* 🍓
📊 *SCANNER FRESITA*

💗 *${userTarget}* *ES* *${porcentaje}%* *CORNUOO* 🦌
🔥 *LE PUSIERON LOS CUERNOS* 🔥
> *“Fresita le regala gorrito”* 🍓`,

    'kchudo': `🍓 *『 𝐁𝐎𝐓 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 』* 🍓
📊 *SCANNER FRESITA*

💗 *${userTarget}* *ES* *${porcentaje}%* *KCHUDO* 😈
🔥 *NO PERDONA NI UNA* 🔥
> *“Fresita le tapa los ojos”* 🍓`,

    'sarnoso': `🍓 *『 𝐁𝐎𝐓 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 』* 🍓
📊 *SCANNER FRESITA*

💗 *${userTarget}* *ES* *${porcentaje}%* *SARNOSO* 🤢
⚠️ *NI SE LE ACERQUEN* ⚠️
> *“Fresita le da jabón”* 🍓`,

    // BASE Y DEMAS...
    'gay': `🍓 *『 𝐁𝐎𝐓 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 』* 🍓
📊 *SCANNER FRESITA*
💗 *${userTarget}* *ES 🏳️‍🌈* *${porcentaje}%* *GAY*
> *“Fresita lo detectó con su corazoncito”* 🍓`,
    'lesbiana': `🍓 *『 𝐁𝐎𝐓 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 』* 🍓
📊 *SCANNER FRESITA*
💗 *${userTarget}* *ES 🏳️‍🌈* *${porcentaje}%* *LESBIANA*
> *“Fresita confirma con un besito”* 🍓`,
    'pajero': `🍓 *『 𝐁𝐎𝐓 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 』* 🍓
📊 *SCANNER FRESITA*
💗 *${userTarget}* *ES 😏💦* *${porcentaje}%* *PAJERO*
> *“Fresita se sonroja y se va”* 🍓`,
    'pajera': `🍓 *『 𝐁𝐎𝐓 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 』* 🍓
📊 *SCANNER FRESITA*
💗 *${userTarget}* *ES 😏💦* *${porcentaje}%* *PAJERA*
> *“Fresita tapa sus ojitos”* 🍓`,
    'puto': `🍓 *『 𝐁𝐎𝐓 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 』* 🍓
📊 *SCANNER FRESITA*
💗 *${userTarget}* *ES* *${porcentaje}%* *PUTO*
🔥 *INFO A SU PRIVADO* 🔥🥵
> *“Fresita se pone roja”* 🍓`,
    'puta': `🍓 *『 𝐁𝐎𝐓 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 』* 🍓
📊 *SCANNER FRESITA*
💗 *${userTarget}* *ES* *${porcentaje}%* *PUTA*
🔥 *INFO A SU PRIVADO* 🔥🥵
> *“Fresita se esconde”* 🍓`,
    'burro': `🍓 *『 𝐁𝐎𝐓 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 』* 🍓
📊 *SCANNER FRESITA*
💗 *${userTarget}* *ES* *${porcentaje}%* *BURRO* 🫏
🤡 *NI EL JEFE LO ENTIENDE*
> *“Fresita le presta su cerebro”* 🍓`,
    'burra': `🍓 *『 𝐁𝐎𝐓 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 』* 🍓
📊 *SCANNER FRESITA*
💗 *${userTarget}* *ES* *${porcentaje}%* *BURRA* 🫏
🤡 *REPROBÓ HASTA EN EDUC. FÍSICA*
> *“Fresita le da tutoría”* 🍓`,
    'kbro': `🍓 *『 𝐁𝐎𝐓 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 』* 🍓
📊 *SCANNER FRESITA*
💗 *${userTarget}* *ES* *${porcentaje}%* *KBRO* 😈
🔥 *NO RESPETA NI A SU ABUELA*
> *“Fresita se aleja corriendo”* 🍓`,
    'chivo': `🍓 *『 𝐁𝐎𝐓 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 』* 🍓
📊 *SCANNER FRESITA*
💗 *${userTarget}* *ES* *${porcentaje}%* *CHIVO* 🐐
💨 *HUELE A CERVEZA Y DISCOTECA*
> *“Fresita le regala desodorante”* 🍓`,
    'kchera': `🍓 *『 𝐁𝐎𝐓 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 』* 🍓
📊 *SCANNER FRESITA*
💗 *${userTarget}* *ES* *${porcentaje}%* *KCHERA* 😈💃
🔥 *ROMPE CORAZONES*
> *“Fresita cobra en helado”* 🍓`
    //... aquí pegas el resto de los 47 que ya tenías...
  }

  let respuestaFinal = respuestas[command.toLowerCase()];

  if (respuestaFinal) {
    await conn.sendMessage(m.chat, {
      text: respuestaFinal,
      mentions: [who]
    }, { quoted: m });
  }
}

handler.help = ['gay', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'burro', 'burra', 'kbro', 'chivo', 'kchera', 'cornudo', 'kchudo', 'sarnoso', 'choro', 'cachero', 'cauchera', 'cabezón', 'jinetero', 'sangre', 'tragón', 'fresa', 'pipero', 'muerto', 'bamba', 'yapa', 'caña', 'pata', 'floro', 'gil', 'gilasa', 'lenteja', 'chibolo', 'chibola', 'viejo', 'vieja', 'grasa', 'graso', 'pituco', 'pituca', 'sapa', 'sapo', 'trome', 'reina', 'king', 'zombie', 'tóxica', 'tóxico', 'simp', 'vago', 'vaga', 'loquito', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map((v) => v + " *@user*")
handler.tags = ['fun']
handler.command = /^(gay|lesbiana|pajero|pajera|puto|puta|burro|burra|kbro|chivo|kchera|cornudo|kchudo|sarnoso|choro|cachero|cauchera|cabezón|jinetero|sangre|tragón|fresa|pipero|muerto|bamba|yapa|caña|pata|floro|gil|gilasa|lenteja|chibolo|chibola|viejo|vieja|grasa|graso|pituco|pituca|sapa|sapo|trome|reina|king|zombie|tóxica|tóxico|simp|vago|vaga|loquito|manco|manca|rata|prostituta|prostituto)$/i

export default handler