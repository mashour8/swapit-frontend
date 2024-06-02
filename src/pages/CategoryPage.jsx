import Select from "react-select";
import ItemSeasonCollections from "../components/itemsComponents/ItemSeasonCollections";

const CategoryPage = () => {
  const options = [
    { value: "0-3m (50/56)", label: "0-3m (50/56)" },
    { value: "3-6m (62/68)", label: "3-6m (62/68)" },
    { value: "6-12 (74/80)", label: "6-12 (74/80)" },
  ];
  return (
    <div className="contianer flex flex-col justify-center">
      <div className="header flex flex-col text-center p-6 bg-[#FBF6F2]">
        <h1 className="font-light text-3xl mb-6">Essentials</h1>
        <p>
          Blending timeless style and superb comfort, our collection of baby
          clothing essentials are the perfect wardrobe staples for your little
          one.
        </p>
      </div>
      <div className="flex justify-start gap-4 w-full mt-4">
        <Select options={options} placeholder="Category" />
        <Select options={options} placeholder="Sizes" />
      </div>
      <div className="w-full">
        <ItemSeasonCollections></ItemSeasonCollections>
      </div>
    </div>
  );
};

export default CategoryPage;
