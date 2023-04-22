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
import { SanityContactarSchema } from '@/sanity/schemas/contactar';
import { SanityGaleriaSchema } from '@/sanity/schemas/galeria';

interface HomePageProps {
  nav: SanityBarraNavSchema;
  horarios: SanityHorariosSchema;
  contactar: SanityContactarSchema;
  galeria: SanityGaleriaSchema;
}

const HomePage: NextPage<HomePageProps> = ({
  nav,
  horarios,
  contactar,
  galeria,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header nav={nav} forceBackground />
      <main className="flex-grow">
        <HeroSection />
        <HorariosSection horarios={horarios} />
        <GaleriaSection galeria={galeria} />
        <ContactarSection contactar={contactar} />
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

  const contactar = await client.fetch('*[_type == "contactar"][0]');
  const galeria = await client.fetch('*[_type == "galeria"][0]');

  return {
    props: { nav, horarios, contactar, galeria },
  };
};

export default HomePage;
