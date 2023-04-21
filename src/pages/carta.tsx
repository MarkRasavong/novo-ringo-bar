import Header from '../components/Header';
import Footer from '../components/Footer';
import { GetStaticProps, NextPage } from 'next';
import { client } from '@/lib/client';
import { SanityBarraNavSchema } from '@/sanity/schemas/nav';
import { SanityCartaSchema } from '@/sanity/schemas/carta';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface CartaPageProps {
  carta: SanityCartaSchema[];
  nav: SanityBarraNavSchema;
}

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
}

const MenuSection: React.FC<{ items: MenuItemProps[]; title: string }> = ({
  items,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-6">
      <button
        className="flex items-center justify-between w-full font-medium text-lg focus:outline-none"
        onClick={toggleSection}
      >
        <span>
          _
          <span className="capitalize text-2xl">
            {`${title[0].toUpperCase() + title.slice(1)}`}
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
                  <h3 className="text-md font-medium mb-1">{item.name}</h3>
                  {item.price !== 0 && (
                    <div className="text-md font-medium">{item.price} €</div>
                  )}
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <hr className="border-b border-gray-300 border-opacity-30" />
    </div>
  );
};

const CartaPage: NextPage<CartaPageProps> = ({ carta, nav }) => {
  const menuData: Record<string, MenuItemProps[]> = {};

  carta.forEach(item => {
    if (!menuData[item.tipo]) {
      menuData[item.tipo] = [];
    }

    menuData[item.tipo].push({
      name: item.nombre,
      description: item.descripcion || '',
      price: item.precio,
    });
  });

  return (
    <div className="min-h-screen flex flex-col bg-ringoBeige">
      <Header nav={nav} />
      <main className="flex-grow">
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
