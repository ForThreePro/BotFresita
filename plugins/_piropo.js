let piropos = [
  // CHILENOS 🇨🇱
  "Oe weon, si la belleza fuera pecado tú tendrías cadena perpetua",
  "Cachaí que erí más rica que sopaipilla con pebre?",
  "¿Te dolió? Porque te caíste del cielo y quedaste brigida",
  "Teni cara de ser mi polola oficial",
  "Si fuerai micro, yo me subo hasta el final",
  "Más linda que fonda en septiembre",
  "Eri como el completo: nadie te puede resistir",
  "¿Eres wifi? Porque siento una conexión",
  "Oe reina, préstame tu número pa marcarte como favorita",
  "Eri más dulce que mote con huesillo",
  "¿Te llamas Google? Porque teni todo lo que busco",
  "Eri como el terremoto: me moviste todo",

  // PERUANOS 🇵🇪
  "Oe causa, si tú fueras ceviche yo me te como al toque",
  "Pituca, tienes una sonrisa que vale más que 100 soles",
  "¿Eres causa limeña? Porque me dejaste loco",
  "Mi causa, con esa mirada me haces perder el año",
  "Eres más rica que arroz con leche de mi abuela",
  "Oe reina, si fueras combi yo me subo y no me bajo",
  "Tienes cara de ser mi ñora oficial",
  "¿Eres pan con chicharrón? Porque me antojas",
  "Con esa belleza deberías cobrar entrada",
  "Eres como el Inca Kola: única y dulce",
  "Si la belleza fuera delito, tú tendrías cadena perpetua",
  "Oe pata, me dejaste cachete",
  "Eres más linda que amanecer en Miraflores",

  // ARGENTINOS 🇦🇷
  "Che boluda, si la belleza pagara impuestos vos estarías debiendo",
  "Tenés una sonrisa que me deja sin palabras, che",
  "¿Sos de Buenos Aires? Porque me dejaste porteño loco",
  "Mamita, si fueras fernet yo me te tomo de una",
  "Tenés cara de novia y cuerpo de pecado",
  "Che, ¿creés en amor a primera vista o paso de nuevo?",
  "Si fueras asado, yo soy el que te da vuelta",
  "Tenés más onda que recital de los redondos",
  "¿Sos empanada? Porque te quiero completa",
  "Mirá vos, que mina linda che",
  "Si la belleza fuera gol, vos serías Messi",
  "Che nena, me robaste el corazón y no devolvés",

  // COLOMBIANOS 🇨🇴
  "Mami, si la belleza fuera pecado tú estarías en el infierno",
  "Uff mami, tenés una sonrisa que me desarma",
  "¿Eres de Medellín? Porque me tienes en una nota",
  "Reina, si fueras arepa yo me te como con todo",
  "Mami, tienes cara de problema... pero me gusta",
  "¿Crees en amor a primera vista o vuelvo a pasar?",
  "Parce, con esa belleza deberías estar en novela",
  "Mami, si fueras café yo me te tomo sin azúcar",
  "Tienes un cuerpo que quita el aliento y la cordura",
  "Reina, me tienes bobo con esa mirada",
  "¿Eres vallenato? Porque me llegaste al alma",
  "Mami, si la envidia matara yo estaría muerto",
  "Tienes más sazón que sancocho de mi abuela"
]

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let quien = m.mentionedJid[0]? m.mentionedJid[0] : m.sender
    let nombre = conn.getName(quien)
    let piropo = piropos[Math.floor(Math.random() * piropos.length)]

    let txt = `🔥 *PIROPO PARA @${quien.split('@')[0]}* 🔥\n\n"${piropo}"`

    await conn.sendMessage(m.chat, {
        text: txt,
        mentions: [quien]
    }, { quoted: m })
}

handler.help = ['piropo @tag']
handler.tags = ['fun']
handler.command = /^(piropo)$/i

export default handler