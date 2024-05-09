import ItemSeasonCollections from "../components/itemsComponents/ItemSeasonCollections";
import ItemsCategory from "../components/itemsCategory/ItemsCategory";
import Slider from "../components/slider/Slider";
import SwiperComponent from "../components/swiper/SwiperComponent";
import RegisterComponent from "../components/register/RegisterComponent";
// import SwiperPage from "../components/swiper/SwiperPage";

const HomePage = () => {
  return (
    <div className="">
      <Slider></Slider>
      {/* <div className="container columns-3"></div> */}
      <h1 className="text-4xl tracking-tight text-gray-900 text-center font-light mt-12">
        Essentials Best Sellers
      </h1>
      <ItemSeasonCollections LIMT={8} offSet={0}></ItemSeasonCollections>
      <ItemsCategory></ItemsCategory>
      <h1 className="text-4xl tracking-tight text-gray-900 text-center font-light mt-12">
        Season Collections
      </h1>
      <ItemSeasonCollections LIMT={8} offSet={8}></ItemSeasonCollections>

      <RegisterComponent></RegisterComponent>
      <SwiperComponent></SwiperComponent>
    </div>
  );
};

export default HomePage;
