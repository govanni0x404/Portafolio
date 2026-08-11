import { services } from '../data/services'

export default function Services() {
  return (
    <section id="servicios" className="bg-slate-50 dark:bg-slate-900/40">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Servicios</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className="rounded-xl bg-white p-6 shadow-sm dark:bg-slate-950">
              <h3 className="font-semibold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
