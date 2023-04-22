import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content={
            'pizzeria, bar, valencia, pizza, pizza romana, italiana, comida, economico, autentica, pizzeria en Valencia, comida italiana, masa fresca, ingredientes de calidad, terraza al aire libre'
          }
        />
        <meta
          name="description"
          content={
            'Disfruta de auténtica pizza italiana en Ringo Bar Pizzería en Valencia. Ingredientes frescos y masa preparada al momento. ¡Haz tu reserva ahora!'
          }
        />
        <title>Pizzería Ringo Bar | Auténtica Pizza en Valencia</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
