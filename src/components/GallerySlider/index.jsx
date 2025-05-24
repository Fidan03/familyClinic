'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import galleryImage from '../../data/galleryData/index';

const DocSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full px-4 py-10 relative">
      <div className="absolute right-4 top-4 z-10 space-x-2">
        <button
          ref={prevRef}
          className="text-neutral-500 text-xl px-3 py-1 border rounded hover:bg-neutral-200 transition"
        >
          ‹
        </button>
        <button
          ref={nextRef}
          className="text-neutral-500 text-xl px-3 py-1 border rounded hover:bg-neutral-200 transition"
        >
          ›
        </button>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={10}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {galleryImage.map((item) => (
          <SwiperSlide key={item.id} className="flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-md w-64 h-[300px]">
              <Image
                src={item.src}
                alt={item.alt}
                width={256}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DocSlider;
