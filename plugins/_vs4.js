let handler = async (m, { conn, participants, groupMetadata, command }) => {

    // SI ES GDC
    if (command === 'gdc' || command === 'guerradeclanes' || command === 'guerra') {
        const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './storage/img/rayo.jpg'
        const groupAdmins = participants.filter(p => p.admin)
        const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'

        let text = `🍓╭─────────────────╮🍓
  🍓 𝗚𝗨𝗘𝗥𝗔 𝗗𝗘 𝗖𝗟𝗔𝗡𝗘𝗦 🍓
╰─────────────────╯🍓

🍓╭─ 𝗜𝗡𝗙𝗢 𝗗𝗘𝗟 𝗩𝗦 ─╮
│📌 𝗖𝗟𝗔𝗡: ${groupMetadata.subject}
│⏰ 𝗛𝗢𝗥𝗔𝗥𝗜𝗢: __:__ 🇦🇷 / __:__ 🇵🇪
╰─────────────────╯

🍓╭─ 𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 𝟭 ─╮
│👑 ・
│🍓 ・
│🍓 ・
│🍓 ・
╰─────────────────╯

🍓╭─ 𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 𝟮 ─╮
│👑 ・
│🍓 ・
│🍓 ・
│🍓 ・
╰─────────────────╯

🍓╭─ 𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 𝟯 ─╮
│👑 ・
│🍓 ・
│🍓 ・
│🍓 ・
╰─────────────────╯

🍓╭─ 𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 𝟰 ─╮
│👑 ・
│🍓 ・
│🍓 ・
│🍓 ・
╰─────────────────╯

🍓╭─ 𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 𝟱 ─╮
│👑 ・
│🍓 ・
│🍓 ・
│🍓 ・
╰─────────────────╯

🍓╭─ 𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 𝟲 ─╮
│👑 ・
│🍓 ・
│🍓 ・
│🍓 ・
╰─────────────────╯

🍓╭─ 𝗦𝗨𝗣𝗟𝗘𝗡𝗧𝗘𝗦 ─╮
│🍓 ・
│🍓 ・
│🍓 ・
│🍓 ・
│🍓 ・
│🍓 ・
╰─────────────────╯

> 🍓 *Coman fresitas y copien*
> 🍓 *Team Nightwish*`.trim()

        return await conn.sendFile(m.chat, pp, 'gdc.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
    }

    // SI ES VS4 O VS6
    let titulares = command === 'vs6'? 6 : 4
    let suplentes = command === 'vs6'? 3 : 2

    let listaTitulares = ''
    for(let i = 1; i <= titulares; i++) {
        listaTitulares += `│🍓 ${i}. ・\n`
    }

    let listaSuplentes = ''
    for(let i = 1; i <= suplentes; i++) {
        listaSuplentes += `│🍓 ${i}. ・\n`
    }

    let plantilla = `🍓╭─────────────────╮🍓
  🍓 𝗧𝗘𝗔𝗠 𝗡𝗜𝗚𝗛𝗧𝗪𝗜𝗦𝗛 🍓
╰─────────────────╯🍓

🍓╭─ 𝗜𝗡𝗙𝗢 ─╮
│👑 𝗘𝗡𝗖𝗔𝗥𝗚𝗔𝗗𝗔: ・
│⏰ 𝗛𝗢𝗥𝗔: __:__ 🇦🇷 / __:__ 🇵🇪
╰─────────────────╯

🍓╭─ 𝗧𝗜𝗧𝗨𝗟𝗔𝗥𝗘𝗦 ─╮
${listaTitulares}╰─────────────────╯

🍓╭─ 𝗦𝗨𝗣𝗟𝗘𝗡𝗧𝗘𝗦 ─╮
${listaSuplentes}╰─────────────────╯

🍓╭─ 𝗗𝗢𝗡𝗔𝗗𝗢𝗥𝗔 ─╮
│💎 ・
╰─────────────────╯

> 🍓 *Coman fresitas y copien*
> 🍓 *Team Nightwish*`

    await conn.sendMessage(m.chat, { text: plantilla }, { quoted: m })
}

handler.help = ['vs4', 'vs6', 'gdc']
handler.tags = ['ff']
handler.command = /^(vs4|vs6|gdc|guerradeclanes|guerra)$/i
handler.group = true
handler.admin = true // SOLO ADMINS

export default handler