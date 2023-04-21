import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GetStaticProps, NextPage } from 'next';
import { client } from '@/lib/client';
import HeroSection from '@/components/HeroSection';
import HorariosSection from '@/components/HorariosSection';
import GaleriaSection from '@/components/GaleriaSection';
import ContactarSection from '@/components/ContactarSection';
import { SanityBarraNavSchema } from '@/sanity/schemas/nav';

interface HomePageProps {
  nav: SanityBarraNavSchema;
}

const HomePage: NextPage<HomePageProps> = ({ nav }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header nav={nav} />
      <main className="flex-grow">
        <HeroSection />
        <HorariosSection />
        <GaleriaSection />
        <ContactarSection />
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const query = '*[_type == "navegacion"][0]';
  const nav = await client.fetch(query);

  return {
    props: { nav },
  };
};

export default HomePage;
