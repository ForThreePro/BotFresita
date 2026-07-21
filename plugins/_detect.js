import chalk from 'chalk'
import { WAMessageStubType } from '@whiskeysockets/baileys'

let handler = m => m

handler.before = async function (m, { conn, groupMetadata }) {
    if (!m.messageStubType ||!m.isGroup) return

    let chat = global.db.data.chats[m.chat]
    if (!chat?.detect) return

    const userJid = m.sender
    const usuario = `@${userJid.split('@')[0]}`
    const group = groupMetadata.subject

    let txt = ''

    switch (m.messageStubType) {
        case 21: // Cambiar nombre
            txt = `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🌸 *REGISTRO DE LA CASITA*
│
│ 📢 *CAMBIO DE NOMBRE*
│ 👤 *Usuario:* ${usuario}
│ 📝 *Nuevo:* _${m.messageStubParameters[0]}_
│ 🏠 *Casita:* ${group}
│
│ > *“Fresita renombró la casita”* 🍓
╰─────────────────❒`; break

        case 22: // Cambiar foto
            txt = `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🌸 *REGISTRO DE LA CASITA*
│
│ 📸 *CAMBIO DE FOTO*
│ 👤 *Usuario:* ${usuario}
│ 🖼️ *Nueva imagen establecida*
│ 🏠 *Casita:* ${group}
│
│ > *“Que se vea dulce la casita”* 🍰
╰─────────────────❒`; break

        case 23: // Cambiar link
            txt = `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🍓 *ALERTA DULCE*
│
│ 🔗 *LINK RESETEADO*
│ 👤 *Usuario:* ${usuario}
│ 🏠 *Casita:* ${group}
│
│ > *“El portal de la casita cambió”* 🍰
╰─────────────────❒`; break

        case 25: // Cambiar ajustes
            txt = `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🛡️ *AJUSTES MODIFICADOS*
│
│ 👤 *Usuario:* ${usuario}
│ ⚙️ *Permisos:* ${m.messageStubParameters[0] == 'on'? '*SOLO ADMINS* 🔒' : '*TODOS* 🔓'}
│ 📊 *Edición de info de casita*
│
│ > *“El control cambió de manos”* 🍓
╰─────────────────❒`; break

        case 26: // Abrir/Cerrar
            txt = `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 🌸 *ESTADO DE LA CASITA*
│
│ 👤 *Usuario:* ${usuario}
│ 🗣️ *Modo:* ${m.messageStubParameters[0] == 'on'? '*SOLO ADMINS* 🔒' : '*TODOS* 🔓'}
│ 📢 *Casita:* ${m.messageStubParameters[0] == 'on'? 'CERRADA' : 'ABIERTA'}
│
│ > *“Fresita cuida la entrada”* 🍓
╰─────────────────❒`; break

        case 29: // Dar admin
            txt = `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 👑 *ASCENSO DULCE*
│
│ 🍰 *Nuevo Admin:* @${m.messageStubParameters[0].split('@')[0]}
│ 👤 *Otorgado por:* ${usuario}
│ 🌸 *Rango:* Administrador
│
│ > *“Que cuide la casita con amor”* 🍓
╰─────────────────❒`; break

        case 30: // Quitar admin
            txt = `╭─🍓 *『 𝐅𝐑𝐄𝐒𝐈𝐓𝐀 𝐁𝐎𝐓 』* 🍓
│ 📉 *DESTITUCIÓN*
│
│ 💥 *Admin bajado:* @${m.messageStubParameters[0].split('@')[0]}
│ 👤 *Ejecutado por:* ${usuario}
│ 🗑️ *Rango removido*
│
│ > *“Fresita quitó los permisos”* 🍰
╰─────────────────❒`; break

        // ELIMINADOS: WELCOME / BYE / KICK
        // case WAMessageStubType.GROUP_PARTICIPANT_ADD:
        // case WAMessageStubType.GROUP_PARTICIPANT_LEAVE:
        // case WAMessageStubType.GROUP_PARTICIPANT_REMOVE:
    }

    if (txt) {
        await this.sendMessage(m.chat, {
            text: txt,
            mentions: [userJid,...(m.messageStubParameters?.[0]? [m.messageStubParameters[0]] : [])]
        })
    }
}

export default handler