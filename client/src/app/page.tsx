import Image from "next/image"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <>
      
      <section className="relative min-h-screen">
        <Image
          src={'/plants-bg.png'}
          alt="background"
          fill
          className="object-cover -z-10"
        />

        <Navbar />

        {/* Container centralizado */}
        <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
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

        <div className="flex flex-col gap-6">
          <Image
            src={'/home-laudo.webp'} 
            alt=""
            width={900}
            height={900}
            className="rounded-full object-cover w-46 h-46 outline outline-black outline-offset-6"
          />

          <h3 className="text-black text-sm font-bold">Laudos, Documentação e Regularização</h3>
          <p className="text-xs">Serviços voltados à segurança jurídica e atendimento às exigências legais</p>
        </div>

                <div className="flex flex-col gap-6">
          <Image
            src={'/home-laudo.webp'} 
            alt=""
            width={900}
            height={900}
            className="rounded-full object-cover w-46 h-46 outline outline-black outline-offset-6"
          />

          <h3 className="text-black text-sm font-bold">Laudos, Documentação e Regularização</h3>
          <p className="text-xs">Serviços voltados à segurança jurídica e atendimento às exigências legais</p>
        </div>

                <div className="flex flex-col gap-6">
          <Image
            src={'/home-laudo.webp'} 
            alt=""
            width={900}
            height={900}
            className="rounded-full object-cover w-46 h-46 outline outline-black outline-offset-6"
          />

          <h3 className="text-black text-sm font-bold">Laudos, Documentação e Regularização</h3>
          <p className="text-xs">Serviços voltados à segurança jurídica e atendimento às exigências legais</p>
        </div>


        </div>
     </section>
    </>
  )
}