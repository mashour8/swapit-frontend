import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

register();

const SwiperComponent = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log("swiper", swiper);
      console.log(progress);
    });
  }, []);

  return (
    <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h2 className="text-4xl tracking-tight text-gray-900 text-center m-6 font-light">
        Essentials Best Sellers
      </h2>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="3"
        navigation="true"
        pagination="true"
        swiper="true"
        speed="500"
        loop="true"
        autoplay="true"
      >
        <swiper-slide>
          <div key={12} className="group relative">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75">
              <img
                src="https://cdn.shopify.com/s/files/1/0082/9351/5349/products/PP1029ES_VANWATPK_IMAGE1_03e5089d-1a05-4026-9fa4-3685c381d5e5_500x500.jpg?v=1684798617https://cdn.shopify.com/s/files/1/0082/9351/5349/products/PN2001W24_MARFL_IMAGE1_2560x2560.jpg?v=1710899966"
                alt="Wqw"
                className="object-cover object-center border rounded-lg p-4 px-8 w-[280px] h-[380px]"
              />
            </div>
            <div className="mt-4 flex flex-col justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Cosy Dress and Leggings Set
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Green</p>
              </div>
              <p className="text-sm font-medium text-gray-900 ">123,00</p>
            </div>
          </div>
        </swiper-slide>

        {/* <swiper-slide>Slide 3</swiper-slide>

        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide> */}
      </swiper-container>
    </div>
  );
};

export default SwiperComponent;
