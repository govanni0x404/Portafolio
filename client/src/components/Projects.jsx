import { projects } from '../data/projects'
import ImageCarousel from './ImageCarousel'

export default function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Proyectos</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-xl border border-slate-200 p-6 dark:border-slate-800"
          >
            {project.images?.length > 0 && (
              <ImageCarousel images={project.images} title={project.title} />
            )}
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              {project.status && (
                <span className="shrink-0 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-800 dark:bg-amber-500/10 dark:text-amber-300">
                  {project.status}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
            {(project.link || project.repo) && (
              <div className="mt-4 flex gap-4 text-sm font-medium">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    Ver demo
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    Código
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
