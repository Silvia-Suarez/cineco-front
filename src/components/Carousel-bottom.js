import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

export default function CarouselControlsInside() {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      
      perView: 4,
      autoplay: 5000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Carousel with controls inside --> */}
      <div className="glide-01 relative w-11/12 m-auto">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-01.jpg"
                className="m-auto max-h-full w-full max-w-full rounded"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-02.jpg"
                className="m-auto max-h-full w-full max-w-full rounded"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-03.jpg"
                className="m-auto max-h-full w-full max-w-full rounded"
              />
            </li>
            <li> 
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-04.jpg"
                className="m-auto max-h-full w-full max-w-full rounded"
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between  "
          data-glide-el="controls"
        >
          <button
            className=" text-blue-terciary inline-flex h-4 w-4 items-center justify-center rounded-full transition duration-300  hover:bg-blue-terciary hover:text-white focus-visible:outline-none lg:h-8 lg:w-8"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button
            className=" text-blue-terciary inline-flex h-4 w-4 items-center justify-center rounded-full transition duration-300  hover:bg-blue-terciary hover:text-white focus-visible:outline-none lg:h-8 lg:w-8"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
      {/*<!-- End Carousel with controls inside --> */}
    </>
  )
}