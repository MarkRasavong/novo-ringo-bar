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
import { SanityHorariosSchema } from '@/sanity/schemas/horarios';

interface HomePageProps {
  nav: SanityBarraNavSchema;
  horarios: SanityHorariosSchema;
}

const HomePage: NextPage<HomePageProps> = ({ nav, horarios }) => {
  console.log(horarios);

  return (
    <div className="min-h-screen flex flex-col">
      <Header nav={nav} />
      <main className="flex-grow">
        <HeroSection />
        <HorariosSection horarios={horarios} />
        <GaleriaSection />
        <ContactarSection />
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryNav = '*[_type == "navegacion"][0]';
  const nav = await client.fetch(queryNav);

  const queryHorarios = '*[_type == "horarios"][0]';
  const horarios = await client.fetch(queryHorarios);

  return {
    props: { nav, horarios },
  };
};

export default HomePage;
