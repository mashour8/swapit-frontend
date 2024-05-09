// import productsServer from "../../services/prodcuts.service";
// import { useEffect, useState, useRef } from "react";

// import { register } from "swiper/element/bundle";
// register();

// const SwiperPage = () => {
//   const swiperElRef = useRef(null);
//   const [products, setProducts] = useState([]);

//   const getAllProduct = () => {
//     productsServer
//       .getAllProducts(10, 0)
//       .then((response) => {
//         const productsList = response.data.products;
//         setProducts(productsList);
//         console.log("productsList SwiperComponent: ", productsList);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     // listen for Swiper events using addEventListener
//     swiperElRef.current.addEventListener("swiperprogress", (e) => {
//       const [swiper, progress] = e.detail;
//       console.log(progress);
//     });

//     swiperElRef.current.addEventListener("swiperslidechange", (e) => {
//       console.log("slide changed");
//     });
//   }, []);

//   return (
//     <div>
//       <swiper-container
//         ref={swiperElRef}
//         slides-per-view="3"
//         navigation="false"
//         pagination="false"
//       >
//         <swiper-slide>Slide 1</swiper-slide>
//         <swiper-slide>Slide 2</swiper-slide>
//         <swiper-slide>Slide 3</swiper-slide>
//         ...
//       </swiper-container>
//     </div>
//   );
// };

// export default SwiperPage;
