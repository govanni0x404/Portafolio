const links = [
  { label: 'govaniyoel@gmail.com', href: 'mailto:govaniyoel@gmail.com' },
  { label: '+56 9 4706 3908', href: 'tel:+56947063908' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/govanni-fuentes-r-72b167312',
  },
  { label: 'GitHub', href: 'https://github.com/govanni0x404' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
      <ul className="flex flex-wrap justify-center gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4">© {new Date().getFullYear()} Govanni Fuentes Rosales.</p>
    </footer>
  )
}
