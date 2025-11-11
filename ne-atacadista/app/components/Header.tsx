// components/Header.tsx
import Link from 'next/link';
import Image from 'next/image'; // Importamos o componente Image

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
       
        <div className="flex items-center">
          <Link href="/">
            
            <Image
              src="/LOGO NE.png" 
              alt="Logo NE Atacadista"
              width={150} 
              height={40} 
              priority 
            />
          </Link>
        </div>

        {/* Navegação */}
        <nav className="hidden md:flex space-x-8"> {/* Esconde em telas pequenas */}
          <Link href="/" className="hover:text-orange-300 transition-colors">
            Home
          </Link>
          <Link href="/institucional" className="hover:text-orange-300 transition-colors">
            Institucional
          </Link>
          <Link href="/parceiros" className="hover:text-orange-300 transition-colors">
            Parceiros
          </Link>
          <Link href="/trabalhe-conosco" className="hover:text-orange-300 transition-colors">
            Trabalhe Conosco
          </Link>
        </nav>

        {/* Botão Fale Conosco */}
        <Link href="/fale-conosco" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-5 rounded-lg transition-colors">
          Fale Conosco
        </Link>
      </div>
    </header>
  );
}