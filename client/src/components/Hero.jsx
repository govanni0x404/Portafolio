export default function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-5xl px-6 py-24 text-center">
      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
        Desarrollador de Software y Analista Programador
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
        Hola, soy Govanni Fuentes Rosales
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
        Full-stack con experiencia en el ciclo completo de diseño, creación y
        despliegue de aplicaciones web, móviles y de escritorio.
        Especializado en PHP, JavaScript, Python y React Native, con foco en
        resolver problemas lógicos y automatizar flujos de negocio.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#proyectos"
          className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500"
        >
          Ver proyectos
        </a>
        <a
          href="#contacto"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-indigo-600 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-200"
        >
          Contactar
        </a>
      </div>
    </section>
  )
}
