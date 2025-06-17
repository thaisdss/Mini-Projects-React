import logo from '@/assets/Logo.svg'
import { NavBar, type NavBarProps } from '../NavBar'

const links: NavBarProps['links'] = [
  {
    name: 'Funcionamento',
    href: '#'
  },
  {
    name: 'Preço',
    href: '#'
  },
  {
    name: 'Login',
    href: '#',
    type: 'secondary'
  }
]

export const Header = () => {
  return (
    <header className='w-full px-8 pt-8 flex items-center justify-between flex-wrap'>
      <img src={logo} alt="Logo" />
      <NavBar links={links} />
    </header>
  )
}