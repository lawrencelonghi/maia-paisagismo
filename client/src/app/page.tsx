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
            <p className="text-center text-gray-200 text-[15px]">
              Somos uma empresa de consultoria ambiental especializada em soluções técnicas que conciliam desenvolvimento, legalidade e respeito ao meio ambiente. Nossa proposta de valor parte do princípio de que o equilíbrio entre as pessoas e a natureza é essencial para a qualidade de vida no presente e para a construção de um futuro mais sustentável para as próximas gerações. Atuamos de forma responsável, técnica e ética, sempre buscando minimizar impactos e potencializar benefícios ambientais.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}