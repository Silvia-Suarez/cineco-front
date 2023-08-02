import { useEffect } from "react";
import Glide from "@glidejs/glide";

const CarouselTop = () => {
  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      perView: 5,
      gap: 0,
      focusAt: "center",
      autoplay: 3000,
      animationDuration: 600,
      animationTimingFunc: "ease-in-out",

      // Agrega otras opciones de configuración según tus necesidades
    });
    glide.mount();
    return () => glide.destroy();
  }, []);

  return (
    <div className="glide">
      <div className="pt-10 glide__track" data-glide-el="track">
        <ul className="glide__slides text-center h-114">
          <li className="glide__slide cuadros h-100 my-auto ">
            <div className="h-full w-full border border-black rounded-3xl "></div>
          </li>
          <li className="glide__slide cuadros h-100 my-auto  bg-blue-600">
            <div className="h-full w-full border border-black rounded-3xl "></div>
          </li>
          <li className="glide__slide cuadros h-100 my-auto  bg-blue-500">
            <div className="h-full w-full border border-black rounded-3xl "></div>
          </li>
          <li className="glide__slide cuadros h-100 my-auto  bg-blue-400">
            <div className="h-full w-full border border-black rounded-3xl "></div>
          </li>
          <li className="glide__slide cuadros h-100 my-auto  bg-blue-300">
            <div className="h-full w-full border border-black rounded-3xl "></div>
          </li>
          <li className="glide__slide cuadros h-100 my-auto  bg-blue-200">
            <div className="h-full w-full border border-black rounded-3xl "></div>
          </li>
          <li className="glide__slide cuadros h-100 my-auto  bg-blue-100">
            <div className="h-full w-full border border-black rounded-3xl "></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CarouselTop;
