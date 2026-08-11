import 'dotenv/config'

export const env = {
  port: process.env.PORT || 4000,
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  resendApiKey: process.env.RESEND_API_KEY,
  contactTo: process.env.CONTACT_TO_EMAIL,
}
