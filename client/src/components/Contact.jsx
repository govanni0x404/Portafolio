import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || '/api'

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()
  const [status, setStatus] = useState(null)

  const onSubmit = async (data) => {
    setStatus(null)
    try {
      await axios.post(`${API_URL}/contact`, data)
      setStatus({ type: 'success', message: 'Mensaje enviado. ¡Gracias por escribir!' })
      reset()
    } catch (error) {
      const message =
        error.response?.data?.message || 'No se pudo enviar el mensaje. Intenta de nuevo.'
      setStatus({ type: 'error', message })
    }
  }

  return (
    <section id="contacto" className="mx-auto max-w-2xl px-6 py-20">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Contacto</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        ¿Tienes un proyecto en mente? Escríbeme.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4" noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            {...register('name', { required: 'El nombre es obligatorio', maxLength: 100 })}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            {...register('email', {
              required: 'El email es obligatorio',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Email inválido' },
            })}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            Mensaje
          </label>
          <textarea
            id="message"
            rows={5}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            {...register('message', { required: 'El mensaje es obligatorio', maxLength: 2000 })}
          />
          {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-60"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
        </button>

        {status && (
          <p
            className={`text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-500'}`}
          >
            {status.message}
          </p>
        )}
      </form>
    </section>
  )
}
