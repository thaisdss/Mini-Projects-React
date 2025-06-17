import logo from '@/assets/Logo.svg'

export const Footer = () => {
  return (
      <footer className='bg-white flex items-center max-md:justify-between max-md:gap-12 py-2 px-4 shadow-xl shadow-zinc-300 w-full'>
        <img src={logo} alt="Logo" />
        <span className='text-zinc-400 md:mx-auto text-end max-md:text-xs'>© 2024 LivroSaaS. Todos os direitos reservados.</span>
      </footer>
  )
}