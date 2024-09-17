"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

// Imports of swiper component
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import { Button } from "@/components/ui/button";

export const CarouselHero = () => {
  const { push } = useRouter();

  // swiper settings
  const pagination = { clickable: true }
  const autoPlay = {
    delay: 5000,
    disableOnInteraction: false,
  }
  const styles = {
    '--swiper-pagination-color': '#fff',
    '--swiper-pagination-bullet-width': '14px',
    '--swiper-pagination-bullet-height': '14px',      
  }

  return (
    <Swiper loop={true} style={styles} effect={"fade"} autoplay={autoPlay} pagination={pagination} modules={[Pagination, EffectFade, Autoplay]}
      className="w-full h-80 md:h-[380px] lg:h-[480px]"
    >
      {/* Banner 1 */}
      <SwiperSlide className="flex justify-center items-center w-full h-full relative">
        <Image src="/assets/banner_1.png" alt="Home Page Hero" fill />
        <Button className="absolute capitalize bg-white hover:bg-lila-light font-bold w-[200px] text-xl h-10 text-black bottom-[12%] left-[22%] animate-bounce z-10" onClick={ () => push("/registro")} >
          regístrate
        </Button>
      </SwiperSlide>

      {/* Banner 2 */}
      <SwiperSlide className="relative">
        <Image src="/assets/banner_2.png" alt="Home Page Hero" fill />
        <div className="absolute w-full bottom-[12%] left-0 flex justify-around">
          <Button
            className="capitalize bg-white hover:bg-lila-light font-bold w-[200px] text-xl h-10 text-black  animate-bounce z-10"
            onClick={ () => push("/categorias/all")}
          >
            comprar
          </Button>
          <Button
            className="capitalize bg-white hover:bg-lila-light font-bold w-[200px] delay-300 text-xl h-10 text-black  animate-bounce z-10"
            onClick={ () => push("/vender")}
          >
            vender
          </Button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

