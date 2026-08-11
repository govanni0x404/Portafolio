import { Resend } from 'resend'
import { env } from './env.js'

let client

// Constructed lazily so a missing RESEND_API_KEY only errors when a message
// is actually sent, not at server startup.
export function getResendClient() {
  if (!client) {
    client = new Resend(env.resendApiKey)
  }
  return client
}

// Resend requires the "from" address to be on a verified domain; this
// sandbox address works out of the box without any domain setup.
export const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
