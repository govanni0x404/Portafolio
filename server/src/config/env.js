import 'dotenv/config'

export const env = {
  port: process.env.PORT || 4000,
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  smtp: {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  contactTo: process.env.CONTACT_TO_EMAIL,
}
