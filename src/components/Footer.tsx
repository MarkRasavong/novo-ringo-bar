import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-ringoRed text-white py-4">
      <div className="max-w-screen-lg mx-auto flex justify-center items-center">
        <Link
          href="/"
          passHref
          className={`lg:text-5xl text-3xl font-logo font-bold`}
        >
          RingoBar
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
