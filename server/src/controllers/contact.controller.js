import { z } from 'zod'
import { transporter } from '../config/mailer.js'
import { env } from '../config/env.js'

const contactSchema = z.object({
  name: z.string().trim().min(1, 'El nombre es obligatorio').max(100),
  email: z.string().trim().email('Email inválido').max(200),
  message: z.string().trim().min(1, 'El mensaje es obligatorio').max(2000),
})

export async function sendContactMessage(req, res, next) {
  const parsed = contactSchema.safeParse(req.body)
  if (!parsed.success) {
    return res.status(400).json({ message: parsed.error.issues[0].message })
  }

  const { name, email, message } = parsed.data

  try {
    await transporter.sendMail({
      from: env.smtp.user,
      to: env.contactTo,
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    })
    res.status(200).json({ message: 'Mensaje enviado correctamente' })
  } catch (err) {
    next(err)
  }
}
