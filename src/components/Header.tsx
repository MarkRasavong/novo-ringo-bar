import { SanityNegocioSchema } from '@/sanity/schemas/negocio';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

interface HeaderProps {
  business: SanityNegocioSchema;
}

const Header: React.FC<HeaderProps> = props => {
  const { facebook, instagram, numeroTelefono } = props.business;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.pageYOffset > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Carta', href: '/carta' },
    { label: 'Horarios', href: '#horarios' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Contactar', href: '#contactar' },
    { label: 'Hacer Pedido', href: '/hacer-pedido' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-ringoRed' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-screen-lg mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link
            href={`tel:${numeroTelefono}`}
            className="text-white mr-3 lg:mr-4"
            aria-label="Llámanos"
          >
            <FaPhone />
          </Link>
          <Link
            href={facebook}
            className="text-white mr-3 lg:mr-4"
            aria-label="Facebook"
          >
            <FaFacebook />
          </Link>
          <Link href={instagram} aria-label="Instagram">
            <FaInstagram className="text-white" />
          </Link>
        </div>
        <Link
          href="/"
          passHref
          className={`text-white text-3xl lg:text-5xl ${
            isScrolled && 'text-3xl'
          } font-bold`}
        >
          RingoBar
        </Link>
        <button
          onClick={handleMenuToggle}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <FaTimes className="text-white text-2xl" />
          ) : (
            <FaBars className="text-white text-2xl" />
          )}
        </button>
      </nav>
      <div
        className={`max-w-screen-lg mx-auto ${isMenuOpen ? '' : 'hidden'}`}
        role="dialog"
        aria-label="Menú de navegación"
        aria-expanded={isMenuOpen}
      >
        <ul className="flex flex-col">
          {menuItems.map(item => (
            <li
              key={item.label}
              className={`text-white font-semibold text-2xl p-3 border-b border-white transition-all duration-300 ${
                isMenuOpen
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              } w-full`}
            >
              <Link href={item.href} passHref onClick={handleMenuToggle}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
