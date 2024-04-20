import ItemSeasonCollections from "../components/itemsComponents/ItemSeasonCollections";
import ItemsCategory from "../components/itemsCategory/ItemsCategory";
import Slider from "../components/slider/Slider";
import SwiperComponent from "../components/swiper/SwiperComponent";
import RegisterComponent from "../components/register/RegisterComponent";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Slider></Slider>
      {/* <div className="container columns-3"></div> */}
      <h1 className="text-4xl tracking-tight text-gray-900 text-center font-light mt-12">
        Essentials Best Sellers
      </h1>
      <ItemSeasonCollections></ItemSeasonCollections>
      <ItemsCategory></ItemsCategory>
      <h1 className="text-4xl tracking-tight text-gray-900 text-center font-light mt-12">
        Season Collections
      </h1>
      <ItemSeasonCollections></ItemSeasonCollections>

      <SwiperComponent></SwiperComponent>
      <RegisterComponent></RegisterComponent>
    </div>
  );
};

export default HomePage;
