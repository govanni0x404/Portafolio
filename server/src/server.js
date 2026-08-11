import express from 'express'
import cors from 'cors'
import { env } from './config/env.js'
import contactRoutes from './routes/contact.routes.js'
import { notFound, errorHandler } from './middleware/errorHandler.js'

const app = express()

app.use(cors({ origin: env.origin }))
app.use(express.json())

app.get('/api/health', (req, res) => res.json({ status: 'ok' }))
app.use('/api/contact', contactRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(env.port, () => {
  console.log(`Server listening on http://localhost:${env.port}`)
})
