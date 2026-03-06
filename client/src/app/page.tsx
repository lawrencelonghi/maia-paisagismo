'use client'
import Image from "next/image"
import Navbar from "@/components/Navbar"
import { useEffect, useRef } from 'react'

export default function Home() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
  const handleScroll = () => {
    if (bgRef.current) {
      // 0.4 = velocidade do parallax (0 = parado, 1 = normal)
      bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`
    }
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar />
      <section className="relative min-h-screen -mt-16 overflow-hidden">
        {/* Wrapper da imagem com ref para o parallax */}
        <div ref={bgRef} className="absolute inset-0 -z-10 will-change-transform">
          <Image
            src={'/plants-bg.png'}
            alt="background"
            fill
            className="object-cover"
          />
        </div>

        {/* Container centralizado */}
        <div className="flex justify-center items-center pt-16">
          <div className="flex flex-col gap-4 max-w-90">
            <Image
              src={'/maia-logo.png'}
              alt="maia paisagismo"
              width={360}
              height={410}
            />
            <p className="text-center text-gray-200 text-[15px] pb-16">
              Somos uma empresa de consultoria ambiental especializada em soluções técnicas que conciliam desenvolvimento, legalidade e respeito ao meio ambiente. Nossa proposta de valor parte do princípio de que o equilíbrio entre as pessoas e a natureza é essencial para a qualidade de vida no presente e para a construção de um futuro mais sustentável para as próximas gerações. Atuamos de forma responsável, técnica e ética, sempre buscando minimizar impactos e potencializar benefícios ambientais.
            </p>
          </div>
        </div>
      </section>

      <section>
      
        <div className="flex justify-between items-center">
          <Image
            src={'/vaso-left.png'}
            alt=''
            className="box-content"
            width={350}
            height={360}
          />

          <p className="text-center font-light text-gray-900 text-[15px] max-w-90 leading-8">
            <span
              className="bg-gray-100 px-2"
              style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}
            >
              Nossos diferenciais estão na união entre visão humanista e sólida experiência técnica, com atuação na elaboração de laudos técnicos e ARTs, manejo arbóreo seguro e adequado ao contexto urbano, além de projetos de hortas domésticas voltados à sustentabilidade e educação ambiental. Atuamos em laudos para poda e remoção, arborização urbana, consultoria e regularização ambiental, oferecendo segurança jurídica e soluções técnicas eficientes que viabilizam projetos e atendem às exigências legais de forma responsável.
            </span>
          </p>

          <Image
            src={'/plants-right.jpg'}
            alt=''
            width={350}
            height={360}
          />
        </div>
        <hr className="text-gray-300 ml-24 mr-24 h-1 mt-6" />
     </section>

     {/* SERVICES SECTION */}

     <section className="mt-20 ml-30 mr-30 flex flex-col items-center gap-26">

      <h2 className="text-3xl text-gray-800 tracking-widest"><span>•</span> Serviços <span>•</span></h2>

      <div className="flex gap-10">

        <div className="flex flex-col gap-8 justify-center items-center">
          <Image
            src={'/home-laudo.webp'} 
            alt=""
            width={900}
            height={900}
            className="rounded-full object-cover w-46 h-46 outline outline-black outline-offset-6"
          />

          <h3 className="text-black text-sm font-bold text-center">Laudos, Documentação e Regularização</h3>

          <p className="text-xs text-center">Serviços voltados à segurança jurídica e atendimento às exigências legais</p>

          <ul className="text-xs flex flex-col gap-2">
            <li className="flex gap-2"><span>•</span>Laudo técnico para poda e remoção de árvores</li>
            <li className="flex gap-2"><span>•</span>Emissão de AR</li>
            <li className="flex gap-2"><span>•</span>Regularização ambiental junto à prefeitura</li>
            <li className="flex gap-2"><span>•</span>Relatórios e pareceres técnicos ambientais</li>
            <li className="flex gap-2"><span>•</span>Perícias e diagnósticos técnicos</li>
          </ul>
        </div>

        <div className="flex flex-col gap-8 justify-center items-center">
          <Image
            src={'/home-arvores.webp'} 
            alt=""
            width={900}
            height={900}
            className="rounded-full object-cover w-46 h-46 outline outline-black outline-offset-6"
          />

          <h3 className="text-black text-sm font-bold text-center">Arborização Urbana e Manejo Arbóreo</h3>

          <p className="text-xs text-center">Serviços relacionados à saúde, segurança e planejamento das árvores</p>

          <ul className="text-xs flex flex-col gap-2">
            <li className="flex gap-2"><span>•</span>Avaliação fitossanitária</li>
            <li className="flex gap-2"><span>•</span>Manejo arbóreo (poda, adequação e acompanhamento técnico)</li>
            <li className="flex gap-2"><span>•</span>Inventário arbóreo</li>
            <li className="flex gap-2"><span>•</span>Plano de manejo arbóreo</li>
            <li className="flex gap-2"><span>•</span>
            Gestão de projetos de arborização urbana
            </li>
            <li className="flex gap-2"><span>•</span>Diagnóstico de risco arbóreo</li>
          </ul>
        </div>

        <div className="flex flex-col gap-8 justify-center items-center">
          <Image
            src={'/home-consultoria.jpg'} 
            alt=""
            width={900}
            height={900}
            className="rounded-full object-cover w-46 h-46 outline outline-black outline-offset-6"
          />

          <h3 className="text-black text-sm font-bold text-center">Consultoria, Planejamento e Projetos Ambientais</h3>

          <p className="text-xs text-center">Serviços estratégicos para viabilização de projetos e tomada de decisão</p>

          <ul className="text-xs flex flex-col gap-2">
            <li className="flex gap-2"><span>•</span>Consultoria ambiental</li>
            <li className="flex gap-2"><span>•</span>Avaliação e mitigação de impactos ambientais</li>
            <li className="flex gap-2"><span>•</span>Planejamento ambiental para empreendimentos
            </li>
            <li className="flex gap-2"><span>•</span>Acompanhamento técnico de obras</li>
            <li className="flex gap-2"><span>•</span>Planos de compensação ambiental</li>
            <li className="flex gap-2"><span>•</span>Projetos de paisagismo sustentável</li>
          </ul>
        </div>

        <div className="flex flex-col gap-8 justify-center items-center">
          <Image
            src={'/home-muda.jpg'} 
            alt=""
            width={900}
            height={900}
            className="rounded-full object-cover w-46 h-46 outline outline-black outline-offset-6"
          />

          <h3 className="text-black text-sm font-bold text-center">Sustentabilidade, Educação e Soluções Verdes</h3>

          <p className="text-xs text-center">Projetos educativos, voltados à sustentabilidade e soluções verdes</p>

          <ul className="text-xs flex flex-col gap-2">
            <li className="flex gap-2"><span>•</span>Projetos de hortas domésticas e urbanas
            </li>
            <li className="flex gap-2"><span>•</span>Hortas em condomínios, escolas e empresas</li>
            <li className="flex gap-2"><span>•</span>Educação ambiental</li>
            <li className="flex gap-2"><span>•</span>Projetos de integração entre pessoas e natureza</li>
            <li className="flex gap-2"><span>•</span>Soluções verdes para espaços urbanos</li>
          </ul>
        </div>


        </div>
     </section>
    </>
  )
}