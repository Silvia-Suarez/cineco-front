import { useEffect } from "react";
import Image from "next/image";
import Glide from "@glidejs/glide";

export default function CarouselControlsInside() {
  useEffect(() => {
    const glide = new Glide(".glide-01", {
      type: "carousel",
      perView: 4,
      autoplay: 5000,
      animationDuration: 700,
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
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
      <div className="glide-01 relative">
        <div className="px-16">
          {/*    <!-- Slides --> */}
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides ">
              <li className="glide__slide">
                <Image
                  height={300}
                  width={300}
                  src="/7f650afc63b9-icono-cine-colombia.png"
                  className="w-80 h-80 rounded-lg"
                />
              </li>
              <li className="glide__slide">
                <Image
                  height={300}
                  width={300}
                  src="/23127617afa8-miercoles-a-mitad-de-precio.jpg"
                  className="w-80 h-80 rounded-lg"
                />
              </li>
              <li className="glide__slide">
                <Image
                  height={300}
                  width={300}
                  src="/Datos Usuarios Cineco.png"
                  className="w-80 h-80 rounded-lg"
                />
              </li>
              <li className="glide__slide">
                <Image
                  height={300}
                  width={300}
                  src="/TARJETA CINECO GRAL.jpg"
                  className="w-80 h-80 rounded-lg"
                />
              </li>
            </ul>
          </div>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute w-full left-0 text-xs px-6 h-full top-0 flex justify-between "
          data-glide-el="controls"
        >
          <button
            className="text-blue-terciary focus-visible:outline-none flex h-4 w-4 items-center my-auto justify-center rounded-full transition duration-300  hover:bg-blue-principal hover:text-white lg:h-8 lg:w-8"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <i className="fa fa-chevron-left"></i>
          </button>
          <button
            className="text-blue-terciary focus-visible:outline-none flex h-4 w-4 items-center my-auto justify-center rounded-full transition duration-300  hover:bg-blue-principal hover:text-white lg:h-8 lg:w-8"
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
