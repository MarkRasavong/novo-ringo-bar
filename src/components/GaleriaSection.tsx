import Image from 'next/image';
import { useState } from 'react';

const GaleriaSection = () => {
  const [isLoaded, setIsLoaded] = useState([false, false, false]);

  const testImg = '/pizza1.jpg';

  const handleLoad = (idx: number) => {
    setIsLoaded(prev => {
      const newState = [...prev];
      newState[idx] = true;
      return newState;
    });
  };

  return (
    <section className="bg-gray-100 py-16" id="galeria">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-8">
          Galería
        </h2>

        <Image
          src={testImg}
          alt={`Pizza123`}
          width={100}
          height={100}
          className={`block rounded-md`}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((itm, idx) => (
            <div className="relative" id={String(idx)} key={idx}>
              {!isLoaded[idx] && (
                <div className="animate-pulse">
                  <div className="bg-gray-300 rounded-md h-64 w-full"></div>
                </div>
              )}
              <Image
                src={testImg}
                alt={`Pizza ${idx}`}
                fill
                onLoad={() => handleLoad(idx)}
                className={`${isLoaded[idx] ? 'block' : 'hidden'} rounded-md`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaleriaSection;
