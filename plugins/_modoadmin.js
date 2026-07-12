const handler = async (m, { conn, args, isAdmin, isOwner }) => {
    // Validación de permisos para el comando
    if (!isAdmin &&!isOwner) throw `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🛡️ *ACCESO DENEGADO*
│ Solo *ADMINS* pueden usar esto
╰─────────────────❒`

    let chat = global.db.data.chats[m.chat]
    if (!chat) global.db.data.chats[m.chat] = {}

    if (/on/i.test(args[0])) {
        chat.modoadmin = true
        await conn.reply(m.chat, `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🍰 *MODO ADMIN ACTIVADO*
│
│ 🌸 *Estado:* ENCENDIDO
│ 🛡️ *Restricción:* Solo Admins
│ 🍓 *Los comandos están bloqueados*
│
│ > *“Fresita cuida la casita dulce”*
╰─────────────────❒`, m)
    } else if (/off/i.test(args[0])) {
        chat.modoadmin = false
        await conn.reply(m.chat, `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ ❌ *MODO ADMIN DESACTIVADO*
│
│ 🌸 *Estado:* APAGADO
│ ✅ *Todos pueden usar el bot*
│ 🧁 *Casita libre nuevamente*
╰─────────────────❒`, m)
    } else {
        await conn.reply(m.chat, `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🧁 *PANEL MODO ADMIN*
│
│ 📌 *Uso:*.modoadmin on /.modoadmin off
│ 🍰 *Función:* Restringe comandos a admins
│ 🛡️ *Protege:* Uso indebido del bot
│
│ 🌸 *Control total de la casita*
╰─────────────────❒`, m)
    }
}

handler.help = ['modoadmin <on/off>']
handler.tags = ['config']
handler.command = /^(modoadmin|adminmode)$/i

handler.before = async function (m, { conn, isAdmin, isOwner, isROwner, isPrems }) {
    if (m.isBaileys || m.fromMe) return!0

    let chat = global.db.data.chats[m.chat]
    if (!chat) return!0

    // Si estamos en un grupo
    if (m.isGroup) {
        // Si el modo admin está activo y el que escribe NO es admin/owner/premium
        if (chat.modoadmin &&!isAdmin &&!isOwner &&!isROwner &&!isPrems) {
            // Si el usuario intenta usar un comando (empieza con prefijo), bloqueamos
            if (m.text.startsWith('.') || m.text.startsWith('/') || m.text.startsWith('#')) {
                await conn.reply(m.chat, `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🍓 *ACCESO BLOQUEADO*
│
│ 🍰 *Modo Admin:* ACTIVO
│ ❌ *No tienes permiso*
│ 🌸 *Solo admins pueden usar comandos*
╰─────────────────❒`, m)
                return false // Detiene la ejecución de otros plugins
            }
        }
    } else {
        // Chats privados - todos pueden usar
        return!0
    }

    return!0
}

export default handler