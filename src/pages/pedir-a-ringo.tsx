import React, { useEffect } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { SanityHorariosSchema } from '@/sanity/schemas/horarios';
import { SanityBarraNavSchema } from '@/sanity/schemas/nav';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client } from '@/lib/client';
import Head from 'next/head';

interface HacerPedidoPageProps {
  nav: SanityBarraNavSchema;
  horarios: SanityHorariosSchema;
}

const HacerPedidoPage: NextPage<HacerPedidoPageProps> = ({ nav, horarios }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://web-order.flipdish.co/client/productionwlbuild/latest/static/js/main.js';
    script.charset = 'UTF-8';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Pedir a Ringo 😉 | Pizzería Ringo Bar</title>
        <meta
          name="description"
          content="Haz tu pedido en línea en Pizzería Ringo Bar. Escoge tus pizzas favoritas, bebidas y más. Entrega rápida y pagos seguros."
        />
        <meta
          name="keywords"
          content="Pedir a Ringo, Pizzería en línea, Pizza a domicilio, Pizza para llevar, Pizza para recoger, Comida italiana, Entrega de comida, Pedido en línea"
        />
      </Head>
      <div className="min-h-screen flex flex-col bg-ringoBeige">
        <Header nav={nav} forceBackground />
        <main className="flex-grow">
          <div
            style={{ minHeight: '88vh' }}
            id="flipdish-menu"
            data-full-screen-on-mobile="false"
            data-offset="100"
            data-restaurant="fd25971"
          ></div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const nav = await client.fetch('*[_type == "navegacion"][0]');

  return {
    props: { nav },
  };
};

export default HacerPedidoPage;
