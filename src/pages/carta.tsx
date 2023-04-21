import Header from '../components/Header';
import Footer from '../components/Footer';
import { GetStaticProps, NextPage } from 'next';
import { client } from '@/lib/client';
import { SanityBarraNavSchema } from '@/sanity/schemas/nav';

interface CartaPageProps {
  carta: SanityCartaSchema;
  nav: SanityBarraNavSchema;
}

const CartaPage: NextPage<CartaPageProps> = ({ carta, nav }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header nav={nav} />
      <main className="flex-grow">
        <div>carta goes here</div>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryNav = '*[_type == "navegacion"][0]';
  const nav = await client.fetch(queryNav);

  const carta = await client.fetch('*[_type == "carta"][0]');

  return {
    props: { carta, nav },
  };
};

export default CartaPage;
