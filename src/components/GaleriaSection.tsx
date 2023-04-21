import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { urlFor } from '@/lib/client';
import { SanityGaleriaSchema } from '@/sanity/schemas/galeria';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper';
interface GaleriaSectionProps {
  galeria: SanityGaleriaSchema;
}

const GaleriaSection: React.FC<GaleriaSectionProps> = ({ galeria }) => {
  const { images } = galeria;
  return (
    <section className="bg-gray-100 py-16" id="galeria">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 text-ringoRed">
          Galería
        </h2>
        <Swiper
          style={{ padding: '0 50px' }}
          spaceBetween={50}
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {images.map(itm => (
            <SwiperSlide key={itm._key}>
              <Image
                height={400}
                width={400}
                src={urlFor(itm.asset._ref).height(400).width(400).toString()}
                alt={itm.description}
                className={`block rounded-md`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GaleriaSection;
