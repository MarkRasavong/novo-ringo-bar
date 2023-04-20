import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GetStaticProps, NextPage } from 'next';
import { client } from '@/lib/client';

const HomePage: NextPage = props => {
  console.log(props);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <h1 className="font-condensed text-5xl">Welcome to Ringo Bar</h1>
        <p className="font-sans text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum libero vitae risus congue, ac ullamcorper orci tristique.
        </p>
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
