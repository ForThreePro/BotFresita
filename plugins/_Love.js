let handler = async (m, { conn, command }) => {
  let who = m.mentionedJid && m.mentionedJid[0]
    ? m.mentionedJid[0]
          : m.quoted
    ? m.quoted.sender
          : m.sender;

  let yo = m.sender
  let nameYo = await conn.getName(yo);
  let nameUser = await conn.getName(who);
  let porcentaje = Math.floor(Math.random() * 101);

  if(command == 'love'){
    let frase = porcentaje < 30
? '🍓 *MEJOR SER AMIGUIS FRESITA*'
      : porcentaje < 60
? '😳 *HAY JALEA ENTRE USTEDES*'
      : porcentaje < 85
? '💗 *ESTA PAREJA DA PARA NOVIAZGO FRESITA*'
      : '🍰 *BODA CON PASTEL DE FRESA Y CREMA*'

    await conn.sendMessage(m.chat, {
      text: `🍓 *BOT FRESITA AMORÓMETRO* 🍓\n\n✨ *@${yo.split('@')[0]}* + *@${who.split('@')[0]}*\n📊 *COMPATIBILIDAD FRESITA: ${porcentaje}%*\n${frase}\n\n🌸 *Escaneado con juguito de fresa por Bot Fresita*`,
      mentions: [yo, who]
    }, {quoted: m})
  }
}

handler.help = ['love *@user*']
handler.tags = ['love', 'fresita']
handler.command = /^(love)$/i

export default handler