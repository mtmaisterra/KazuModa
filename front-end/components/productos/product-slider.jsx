import { useState } from "react";
import Image from "next/image";

import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Navigation,
  Virtual,
  FreeMode,
  Thumbs,
} from "swiper/modules";

export default function ProductSlider({ images, name }) {
  const [currentImage, setCurrentImage] = useState(null);


  return (
    <div className="flex flex-col gap-4">
      {/* Imagen principal del producto */}
      <div className="w-[500px] h-full bg-gray-light p-2 rounded-lg">
        <Swiper
          style={{
            "--swiper-navigation-color": "#3c3c3c",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          keyboard={{ enabled: true }}
          thumbs={{ swiper: currentImage }}
          modules={[FreeMode, Navigation, Thumbs, Virtual]}
          className="w-full h-[650px]"
        >
          {images.map((url, index) => (
            <SwiperSlide className="relative" key={url} virtualIndex={index}>
              <Image
                src={url}
                fill
                alt={`${name}_${index}`}
                className="object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Thumbnail selector del carrusel */}
      <Swiper
        onSwiper={setCurrentImage}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs, Keyboard, Virtual]}
        className="w-full h-[200px]"
        style={{
          "--swiper-navigation-color": "#A852FF",
          "--swiper-navigation-size": "32px"
        }}
      >
        {images.map((url, index) => (
          <SwiperSlide className="relative cursor-pointer" key={`thumbnail_${url}`} virtualIndex={index}>
            <Image
              src={url}
              fill
              alt={`${name}_${index}`}
              className="object-contain p-2"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
