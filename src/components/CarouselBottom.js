import { useEffect } from "react";
import Image from "next/image";
import Glide from "@glidejs/glide";

export default function CarouselBottom() {
  useEffect(() => {
    const glide = new Glide(".glide-01", {
      type: "carousel",
      perView: 4,
      autoplay: 5000,
      animationDuration: 700,
      breakpoints: {
        1280: {
          perView: 3,
        },
        768: {
          perView: 2,
        },
      },
    });
    glide.mount();

    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Carousel with controls outside --> */}
      <div className="glide-01 relative bg-white py-20">
        <div className="sm:px-16 px-10 ">
          {/*    <!-- Slides --> */}
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className=" glide__slide">
                <Image
                  alt="Imagen-carusel-bot"
                  height={300}
                  width={300}
                  src="/7f650afc63b9-icono-cine-colombia.png"
                  className="rounded-lg w-80"
                />
              </li>
              <li className="glide__slide">
                <Image
                  alt="Imagen-carusel-bot"
                  height={300}
                  width={300}
                  src="/23127617afa8-miercoles-a-mitad-de-precio.jpg"
                  className=" rounded-lg w-80"
                />
              </li>
              <li className="glide__slide">
                <Image
                  alt="Imagen-carusel-bot"
                  height={300}
                  width={300}
                  src="/Datos Usuarios Cineco.png"
                  className=" rounded-lg w-80"
                />
              </li>
              <li className="glide__slide">
                <Image
                  alt="Imagen-carusel-bot"
                  height={300}
                  width={300}
                  src="/TARJETA CINECO GRAL.jpg"
                  className=" rounded-lg w-80"
                />
              </li>
            </ul>
          </div>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute w-full left-0 text-xs px-1 sm:px-6 h-full top-0 flex justify-between "
          data-glide-el="controls"
        >
          <button
            className="text-blue-terciary focus-visible:outline-none flex items-center my-auto justify-center rounded-full transition duration-300  hover:bg-blue-principal hover:text-white h-8 w-8"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <i className="fa fa-chevron-left"></i>
          </button>
          <button
            className="text-blue-terciary focus-visible:outline-none flex items-center my-auto justify-center rounded-full transition duration-300  hover:bg-blue-principal hover:text-white h-8 w-8"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      {/*<!-- End Carousel with controls outside --> */}
    </>
  );
}
