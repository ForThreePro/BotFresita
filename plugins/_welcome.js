import { WAMessageStubType } from '@whiskeysockets/baileys'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

let handler = m => m

handler.before = async function (m, { conn, groupMetadata }) {
  try {
    if (!m.messageStubType ||!m.isGroup) return true

    const chat = global.db?.data?.chats?.[m.chat]
    if (!chat?.welcome) return true // se activa con.welcome on

    const userJid = m.messageStubParameters?.[0] || m.participant
    if (!userJid) return true

    // SOLO IMAGEN LOCAL
    const localPath = join(process.cwd(), 'storage', 'img', 'rayo.jpg')
    const img = existsSync(localPath)? readFileSync(localPath) : Buffer.from('')

    const user = `@${userJid.split('@')[0]}`
    const group = groupMetadata.subject
    const desc = groupMetadata.desc || 'Bienvenido al grupo'
    const total = groupMetadata.participants.length

    let txt = ''

    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
      txt = `⛈️ *RAYO PREM* ⚡\n\n` +
            `🌩️ *BIENVENIDO/A* ${user}\n\n` +
            `📍 *Grupo:* ${group}\n` +
            `👥 *Miembros:* ${total}\n` +
            `📝 *Descripción:* ${desc}\n\n` +
            `> Lee las reglas y portaos bien ⚡`
    }

    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE ||
        m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE) {
      txt = `⛈️ *RAYO PREM* ⚡\n\n` +
            `💨 ${user} salió de *${group}*\n\n` +
            `👥 *Quedan:* ${total} miembros\n` +
            `> Que te vaya bien ⚡`
    }

    if (txt && img.length > 0) {
      await conn.sendMessage(m.chat, {
        image: img,
        caption: txt,
        mentions: [userJid]
      })
    }

  } catch (e) {
    console.error("Error Welcome:", e)
  }
  return true
}

// Comando para activar/desactivar
handler.command = /^(welcome|bienvenida)$/i
handler.group = true
handler.admin = true

handler.help = ['welcome on', 'welcome off']
handler.tags = ['config']

export default handler