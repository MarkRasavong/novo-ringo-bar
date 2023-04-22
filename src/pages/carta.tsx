import React, { useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { client } from '@/lib/client';
import { SanityBarraNavSchema } from '@/sanity/schemas/nav';
import { SanityCartaSchema } from '@/sanity/schemas/carta';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { formatAsEuro } from '@/utils';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Head from 'next/head';

interface CartaPageProps {
  carta: SanityCartaSchema[];
  nav: SanityBarraNavSchema;
}

interface MenuItemProps {
  name: string;
  engName: string;
  engDescription: string;
  description: string;
  price: number;
}

const CartaPage: NextPage<CartaPageProps> = ({ carta, nav }) => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const menuData: Record<string, MenuItemProps[]> = {};

  carta.forEach(item => {
    if (!menuData[item.tipo]) {
      menuData[item.tipo] = [];
    }

    menuData[item.tipo].push({
      name: item.nombre,
      engName: item.eng_name || item.nombre,
      engDescription: item.eng_descripcion || '',
      description: item.descripcion || '',
      price: item.precio,
    });
  });

  const MenuSection: React.FC<{ items: MenuItemProps[]; title: string }> = ({
    items,
    title,
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = () => {
      setIsOpen(!isOpen);
    };

    const translatedTitle =
      language === 'en'
        ? {
            'para-compartir': 'Appetizers',
            bocadillos: 'Sandwiches',
            bebidas: 'Drinks',
            extras: 'Extras',
            pastas: 'Pastas',
            pizzas: 'Pizzas',
            postres: 'Desserts',
            promociones: 'Promotions',
          }[title]
        : title;

    return (
      <div className="mb-6">
        <button
          type="button"
          className="flex items-center justify-between w-full font-medium text-lg focus:outline-none"
          onClick={toggleSection}
        >
          <span>
            _
            <span className="capitalize text-2xl">
              {`${
                (translatedTitle as string)[0].toUpperCase() +
                (translatedTitle as string).slice(1)
              }`}
            </span>
          </span>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {isOpen && (
          <div className="grid gap-6 my-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row justify-between items-center lg:items-start"
              >
                <div className="flex flex-col w-full">
                  <div className="mr-2 flex justify-between">
                    <h3 className="text-md font-medium mb-1">
                      {language === 'es' ? item.name : item.engName}
                    </h3>
                    {item.price !== 0 && (
                      <div className="text-md font-medium">
                        {formatAsEuro(item.price)}
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">
                    {language === 'es' ? item.description : item.engDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <hr className="border-b border-gray-300 border-opacity-30" />
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Carta | Pizzería Ringo Bar</title>
        <meta
          name="description"
          content="Explora nuestro carta de deliciosas pizzas, pastas, ensaladas y mucho más. Descubre los sabores auténticos de Italia en la Pizzería Ringo Bar en Madrid. ¡Haz tu pedido en línea hoy mismo!"
        />
        <meta
          name="keywords"
          content="carta, menú, comida, bebidas, restaurante, platos, carta, restaurante en línea, pedido en línea, comida para llevar"
        />
      </Head>
      <div className="min-h-screen flex flex-col bg-ringoBeige">
        <Header nav={nav} />
        <main className="flex-grow">
          <div className="relative h-[50vh]">
            <img
              src="/austin-ban-IS6RwpuEJpY-unsplash.jpg"
              alt="Chef de pizza preparando masa de pizza en Ringo Bar Pizzeria en Valencia"
              className="h-[50vh] w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="absolute inset-0 flex justify-center items-center">
              <h1 className="text-4xl font-bold text-white">La Carta</h1>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              className={`mx-2 text-3xl ${
                language === 'es' ? 'font-bold' : ''
              }`}
              onClick={() => setLanguage('es')}
            >
              🇪🇸
            </button>
            <button
              className={`mx-2 text-3xl ${
                language === 'en' ? 'font-bold' : ''
              }`}
              onClick={() => setLanguage('en')}
            >
              🇬🇧
            </button>
          </div>
          <div className="max-w-3xl mx-auto py-12 px-4">
            {Object.keys(menuData).map(section => (
              <MenuSection
                key={`${section}_accordion`}
                title={section}
                items={menuData[section]}
              />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryNav = '*[_type == "navegacion"][0]';
  const nav = await client.fetch(queryNav);

  const carta = await client.fetch('*[_type == "carta"]');

  return {
    props: { carta, nav },
  };
};

export default CartaPage;
