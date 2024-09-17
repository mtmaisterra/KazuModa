"use client";

import "swiper/css/bundle";
import { SwiperSlide, Swiper } from "swiper/react";
import { Keyboard, Navigation, Virtual } from "swiper/modules";

import ProductCard from "@/components/productos/product-card";

export default function SuggestionProducts({ suggestions }) {
  const style = {
    "--swiper-navigation-color": "#000",
  };

  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Virtual, Keyboard]}
      styles={style}
      slidesPerView={4}
      spaceBetween={30}
      keyboard={{
        enabled: true
      }}
      virtual
      style={{
        "--swiper-navigation-color": "#3c3c3c",
        "--swiper-navigation-size": "32px"
      }}
    >
      {suggestions.map((product, index) => (
        <SwiperSlide key={product.id} virtualIndex={index} className="object-contain">
          <ProductCard data={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
