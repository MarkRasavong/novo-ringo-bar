import React, { useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { client, urlFor } from '@/lib/client';
import { SanityBarraNavSchema } from '@/sanity/schemas/nav';
import { SanityCartaSchema } from '@/sanity/schemas/carta';
import { FaChevronDown, FaChevronUp, FaWindowClose } from 'react-icons/fa';
import { formatAsEuro } from '@/utils';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Head from 'next/head';
import Image from 'next/image';
import ringoLogo from '../../public/pizzeria_ringo.webp';

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
  foto: string;
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
      foto: item.foto?.asset._ref as unknown as string,
    });
  });

  const MenuSection: React.FC<{ items: MenuItemProps[]; title: string }> = ({
    items,
    title,
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState<MenuItemProps | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (item: MenuItemProps) => {
      setCurrentItem(item);
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setCurrentItem(null);
      setIsModalOpen(false);
    };

    const toggleSection = () => {
      setIsOpen(!isOpen);
    };

    const translatedTitle =
      language === 'en'
        ? {
            entrantes: 'Appetizers',
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
                    <div className="flex items-center">
                      {item.foto ? (
                        <div
                          onClick={() => openModal(item)}
                          className="cursor-pointer"
                        >
                          <Image
                            height={50}
                            width={50}
                            src={urlFor(item.foto)
                              .height(50)
                              .width(50)
                              .toString()}
                            alt={`photo of ${item.name}. ${item.description}`}
                            className={`block rounded-md mr-1`}
                          />
                        </div>
                      ) : (
                        <Image
                          height={50}
                          width={50}
                          src={ringoLogo}
                          alt={`photo of ${item.name}`}
                          className={`block rounded-md mr-1`}
                        />
                      )}
                      {isModalOpen && (
                        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-75">
                          <div className="relative">
                            <button
                              className="absolute top-2 right-2 text-white text-xl focus:outline-none"
                              onClick={closeModal}
                            >
                              <FaWindowClose size={40} />
                            </button>
                            <Image
                              width={500}
                              height={500}
                              src={urlFor(currentItem!.foto)
                                .width(500)
                                .height(500)
                                .toString()}
                              alt={`Larger photo of ${currentItem!.name}`}
                              className="max-w-full max-h-full"
                            />
                          </div>
                        </div>
                      )}
                      <div>
                        <h3 className="text-md font-medium mb-1">
                          {language === 'es' ? item.name : item.engName}
                        </h3>
                      </div>
                    </div>
                    {item.price !== 0 && (
                      <div className="text-md font-medium flex items-center">
                        {formatAsEuro(item.price)}
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
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
        <Header nav={nav} forceBackground />
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
