const experience = [
  {
    id: 'data-maule',
    role: 'Desarrollador Full Stack / Mobile',
    company: 'Soluciones Informáticas Data Maule Spa',
    period: 'Abril 2025 - Actualidad',
    description:
      'Desarrollo web full stack con CodeIgniter, PostgreSQL y Bootstrap, integración de pasarelas de pago (Mercado Pago, Transbank, Getnet) y apps móviles con React Native/Expo.',
  },
  {
    id: 'sci',
    role: 'Desarrollador de Software',
    company: 'Sistemas Comerciales Integrados',
    period: 'Marzo 2023 - Enero 2024',
    description:
      'Sistema de control de asistencia en PHP nativo, Bootstrap y MySQL, con módulo de gestión de horas y alertas.',
  },
]

const education = {
  title: 'Técnico Superior Analista Programador',
  institution: 'Centro de Formación Técnica San Agustín',
  period: 'Mayo 2024',
}

const skills = [
  'JavaScript',
  'TypeScript',
  'PHP',
  'Python',
  'Java',
  'SQL (MySQL/PostgreSQL)',
  'React',
  'React Native (Expo, React Navigation)',
  'Next.js',
  'Node.js',
  'Express',
  'Prisma',
  'CodeIgniter',
  'Django',
  'Git/GitHub',
  'Ubuntu Server',
]

export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Sobre mí</h2>
      <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
        Soy desarrollador full-stack y participo en todo el proceso: diseño,
        desarrollo y despliegue de aplicaciones web, móviles y de escritorio.
        Empecé trabajando con PHP y Python, y con el tiempo fui sumando
        React, Node.js y Next.js. Me enfoco en resolver problemas reales y
        automatizar procesos que le ahorran tiempo al negocio.
      </p>

      <a
        href="/cv/CV-Govanni-Fuentes.pdf"
        download
        className="mt-6 inline-block rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-indigo-600 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-200"
      >
        Descargar CV
      </a>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Experiencia
          </h3>
          <ol className="mt-4 space-y-6 border-l border-slate-200 pl-4 dark:border-slate-800">
            {experience.map((job) => (
              <li key={job.id}>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {job.period}
                </p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                  {job.role}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{job.company}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {job.description}
                </p>
              </li>
            ))}
          </ol>

          <h3 className="mt-8 text-lg font-semibold text-slate-900 dark:text-white">
            Formación
          </h3>
          <div className="mt-4 border-l border-slate-200 pl-4 dark:border-slate-800">
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              {education.period}
            </p>
            <p className="mt-1 font-semibold text-slate-900 dark:text-white">
              {education.title}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {education.institution}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Skills técnicos
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
