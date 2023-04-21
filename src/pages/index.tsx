import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GetStaticProps, NextPage } from 'next';
import { client } from '@/lib/client';
import { SanityNegocioSchema } from '@/sanity/schemas/negocio';
import HeroSection from '@/components/HeroSection';
import HorariosSection from '@/components/HorariosSection';
import GaleriaSection from '@/components/GaleriaSection';
import ContactarSection from '@/components/ContactarSection';

interface HomePageProps {
  business: SanityNegocioSchema;
}

const HomePage: NextPage<HomePageProps> = ({ business }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header business={business} />
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
  const query = '*[_type == "negocio"][0]';
  const business = await client.fetch(query);

  return {
    props: { business },
  };
};

export default HomePage;
