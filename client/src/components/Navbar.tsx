'use client'
import { useState, useEffect } from 'react'
import { Search, X, Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Wrapper externo: full width, recebe o bg */}
      <div className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-900/90 backdrop-blur-sm' : ''}`}>
        
        {/* Inner: responsável pelo padding horizontal */}
        <div className='flex justify-between items-center px-8 py-4 text-gray-200'>

          {/* Esquerda: Hamburger + Logo */}
          <div className='flex items-center gap-3'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hidden max-lg:flex items-center text-gray-200 p-2 z-50 transition-transform duration-300"
              aria-label="Toggle menu"
            >
              <div className={`transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'} absolute`}>
                <Menu size={22} />
              </div>
              <div className={`transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'}`}>
                <X size={22} />
              </div>
            </button>
            <span className='text-xl font-light text-gray-200'>
              Maia Consultoria Ambiental
            </span>
          </div>

          {/* Centro: Nav desktop */}
          <nav className='hidden lg:flex items-center gap-8 font-light text-[15px] text-gray-200'>
            <a href="">Contato</a>
            <a href="">Arborização</a>
            <a href="">Documentação</a>
            <a href="">Consultoria</a>
            <a href="">Educação e sustentabilidade</a>
          </nav>

          {/* Direita: Search */}
          <div className='flex items-center'>
            <Search size={20} />
          </div>

        </div>
      </div>

      {/* Overlay escuro */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Drawer vindo da esquerda */}
      <div className={`fixed top-0 left-0 h-full w-[45%] bg-neutral-900 z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Botão fechar */}
        <div className='flex justify-start ml-5 p-4'>
          <button onClick={() => setIsOpen(false)} className='text-gray-200'>
            <X size={24} />
          </button>
        </div>

        {/* Links com stagger */}
        <div className='flex flex-col gap-8 px-8 pt-4 font-light text-gray-200 text-lg'>
          {['Contato', 'Arborização', 'Documentação', 'Consultoria', 'Educação e sustentabilidade'].map((item, i) => (
            <a
              key={item}
              href=""
              onClick={() => setIsOpen(false)}
              className='transition-all duration-300'
              style={{
                transitionDelay: isOpen ? `${i * 60}ms` : '0ms',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateX(0)' : 'translateX(-16px)',
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar