const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="font-semibold text-slate-900 dark:text-white">
          Govanni Fuentes
        </a>
        <ul className="hidden gap-6 text-sm font-medium text-slate-600 sm:flex dark:text-slate-300">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-indigo-600 dark:hover:text-indigo-400">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
