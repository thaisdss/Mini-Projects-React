export type NavBarProps = {
  links: {
    name: string, 
    href: string,
    type?: 'primary' | 'secondary'
  }[]
}

export const NavBar = ({ links }: NavBarProps) => {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {links.map((link) => (
          <li key={link.name} className={`cursor-pointer ${link.type === 'secondary' && 'bg-white border-1 border-zinc-300 px-4 py-2 rounded-sm text-center hover:bg-zinc-400 hover:border-white hover:text-white transition-all duration-700'}`}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}