// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* 1. SEÇÃO HERO (CAMINHÃO) */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-start text-white">
        
        {/* Imagem de Fundo */}
        <Image
          src="/h1_hero1.png" // Caminho a partir da pasta 'public'
          alt="Imagem meramente ilustrativa"
          fill
          className="-z-10 object-cover" // O brilho foi removido
        />

        {/* Conteúdo de Texto por cima */}
        <div className="text-left p-8 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold drop-shadow-lg">
            {/* Usamos um <span> para colorir só a primeira palavra */}
            <span className="text-orange-500">Nordeste</span> Atacadista!
          </h1>
          <p className="mt-4 text-2xl md:text-3xl font-light">
            Distribuindo qualidade, fortalecendo parcerias.
          </p>
        </div>
      </section>

      {/* 2. SEÇÃO "QUEM SOMOS" */}
      <section className="bg-white py-20 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Coluna da Esquerda (Texto) */}
          <div className="text-gray-700">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Quem Somos – NE Atacadista
            </h2>
            <p className="mb-4">
              A <span className="font-bold">NE Atacadista</span> é uma distribuidora completa que atua com excelência no fornecimento de <span className="font-bold">produtos alimentícios</span> para todo o varejo e o setor institucional. Nosso portfólio reúne desde <span className="font-bold">lácteos, embutidos</span> e <span className="font-bold">proteínas bovinas e suínas</span>, até <span className="font-bold">bebidas</span> e diversos outros itens essenciais para o dia a dia dos nossos clientes.
            </p>
            <p className="mb-4">
              Com uma estrutura moderna e uma equipe comprometida, garantimos <span className="font-bold">qualidade, agilidade e confiança</span> em cada entrega. Trabalhamos em parceria com grandes marcas e produtores regionais, assegurando produtos sempre frescos e com procedência garantida.
            </p>
            <p className="mb-4">
              Mais do que uma distribuidora, somos <span className="font-bold">parceiros de negócio</span> dos nossos clientes. Nosso propósito é facilitar o abastecimento e contribuir para o crescimento de supermercados, mercearias, restaurantes, padarias e outros estabelecimentos que movem o mercado alimentar.
            </p>
            <p className="mb-4">
              A <span className="font-bold">NE Atacadista</span> nasceu com o compromisso de unir <span className="font-bold">eficiência logística, atendimento personalizado</span> e <span className="font-bold">preços competitivos</span>, tornando-se referência em distribuição alimentícia na região.
            </p>
            <p className="font-bold text-gray-800">
              NE Atacadista – Qualidade e confiança que alimentam o seu negócio.
            </p>
          </div>

          {/* Coluna da Direita (Imagem) */}
          <div>
            <Image
              src="/quem-somos.jpg" // Caminho a partir da pasta 'public'
              alt="Aperto de mão de parceiros"
              width={800} // Largura reduzida
              height={100} // Altura reduzida
              className="rounded-lg shadow-xl object-cover w-full h-auto"
            />
          </div>
          <div>
            
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO "NOSSAS MARCAS PARCEIRAS" */}
      <section className="bg-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">
            Nossas Marcas <span style={{ color: 'rgba(253, 126, 20, 1)' }}>Parceiras</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <Link href="/marcas/valedourado">
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg flex items-center justify-center border-4 border-gray-200">
                  <Image
                    src="/Logo-Valedourado.png"
                    alt="Logo Valedourado"
                    width={350}
                    height={250}
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
            <Link href="/marcas/nutribas">
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg flex items-center justify-center border-4 border-gray-200">
                  <Image
                    src="/Logo-Nutribas.png"
                    alt="Logo Nutribas"
                    width={350}
                    height={150}
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
            <Link href="/marcas/agrofoods">
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg flex items-center justify-center border-4 border-gray-200">
                  <Image
                    src="/Logo-Agrofoods.png"
                    alt="Logo Agrofoods"
                    width={350}
                    height={150}
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}