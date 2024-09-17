"use client";

import Image from "next/image";
import { Button } from "../ui/button";

export default function CallToActionGirl() {
  return (
    <div className="flex w-full h-[500px] relative">
      <Image
        src="/assets/banner_3.png"
        width={1400}
        height={900}
        alt="chica_alegre"
        placeholder="blur"
        blurDataURL="/assets/banner_3.png"
        className="object-fill"
      />
      <div className="flex justify-center absolute bottom-[10%] w-full">
      <Button
        className="capitalize bg-white hover:bg-lila-neon hover:text-white font-bold w-[200px] text-xl h-10 text-black  animate-bounce z-10"
        onClick={() => push("/")}
      >
        ¡comienza ya!
      </Button>
      </div>
    </div>
  );
}
