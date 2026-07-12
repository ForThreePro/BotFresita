import os from 'os'

let handler = async (m) => {
    let cpu = os.loadavg()[0].toFixed(2)
    m.reply(`╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🖥️ *MONITOR CPU*
│
│ 🍰 *Carga Actual:* ${cpu}%
│ 🌸 *Estado:* Horneando fresitas
╰─────────────────❒`)
}

handler.help = ['cpu']
handler.tags = ['main']
handler.command = ['cpu']

export default handler