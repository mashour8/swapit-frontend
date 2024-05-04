/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import sizesServer from "../../services/sizes.service";
import categoriesServer from "../../services/categories.service";
import productsServer from "../../services/prodcuts.service";
// import { X } from "lucide-react";

const animatedComponents = makeAnimated();
const boolVal = [
  { value: true, label: "True" },
  { value: false, label: "False" },
];
const PopUpEditProduct = ({ handelEdit, productID }) => {
  const [name, setName] = useState("");
  const [productId] = useState(productID);

  const [price, setPrice] = useState(0);

  const [imageUrl, setImageUrl] = useState([]);

  const [categoriesList, setCategoriesList] = useState([]);
  const [selectedCategoriesList, setSelectedCategoriesList] = useState("");

  const [sizesList, setSizesList] = useState([]);
  const [selectedSizesList, setSelectedSizesList] = useState([]);

  const [selectedEssential, setSelectedEssential] = useState(false);

  const [selectedNew, setSelectedNew] = useState(false);

  const [selectedSeason, setSelectedSeason] = useState(false);

  const [description, setDescription] = useState("");

  const [product, setProduct] = useState(null);

  //Before adding the IDs of the selected sizes, it must be renamed back to the original names.
  const handleSelectedSize = (selectedOptions) => {
    setSelectedSizesList(selectedOptions);
  };

  const handleSelectedCategory = (selectedOptions) => {
    setSelectedCategoriesList(selectedOptions);
  };

  const handleSelectedEssential = (selectedOptions) => {
    setSelectedEssential(selectedOptions);
  };

  const handleSelectedNew = (selectedOptions) => {
    setSelectedNew(selectedOptions);
    console.log("setSelectedNew:::", selectedOptions);
  };

  const handleSelectedSeason = (selectedOptions) => {
    setSelectedSeason(selectedOptions);
  };

  const transformedSizesData = sizesList.map((size) => ({
    value: size._id,
    label: size.name,
  }));

  const reTransformedSizesData = selectedSizesList.map((size) => size.value);

  const transformedCategoriesData = categoriesList.map((category) => ({
    value: category._id,
    label: category.name,
  }));

  const getAllCategories = () => {
    categoriesServer
      .getAllCategory(100, 0)
      .then((response) => {
        setCategoriesList(response.data.categories);
        console.log(response.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllSizes = () => {
    sizesServer
      .getAllSize(100, 0)
      .then((response) => {
        setSizesList(response.data.sizes);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllSizes();
    getAllCategories();
  }, []);

  useEffect(() => {
    productsServer
      .getProduct(productId)
      .then((response) => {
        const product = response.data;
        console.log("full product data ::", product);
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setImageUrl(product.images);

        setSelectedCategoriesList({
          value: product.category._id,
          label: product.category.name,
        });

        const selectedSizes = product.sizes.map((sizeId) => ({
          value: sizeId._id,
          label: sizeId.name,
        }));

        setSelectedSizesList(selectedSizes);

        setSelectedNew({
          value: product.isNew,
          label: product.isNew ? "True" : "False",
        });
        setSelectedEssential({
          value: product.isEssential,
          label: product.isEssential ? "True" : "False",
        });
        setSelectedSeason({
          value: product.isSeason,
          label: product.isSeason ? "True" : "False",
        });
      })
      .catch((error) => console.log(error));
  }, [productId]);

  const handleAddNewPrduct = (e) => {
    e.preventDefault();
    const requestBody = {
      name,
      price,
      images: imageUrl,
      category: selectedCategoriesList.value,
      sizes: reTransformedSizesData,
      description: description,
      isNew: selectedNew.value,
      isSeason: selectedSeason.value,
      isEssential: selectedEssential.value,
    };
    console.log("requestBody: ", requestBody);

    productsServer
      .updateProduct(productId, requestBody)
      .then((response) => {
        setProduct(response.data);
        console.log("updated product: ", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    Array.from(e.target.files).forEach((file) => {
      uploadData.append("imageUrl", file);
    });

    axios
      .post("http://localhost:5005/api/upload", uploadData)
      .then((response) => {
        setImageUrl([...imageUrl, ...response.data]);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  // const updateObjectAtIndex = (index, newValues) => {
  //   setImageUrl((prevItems) =>
  //     prevItems.map((item, i) => {
  //       if (i === index) {
  //         return { ...item, ...newValues };
  //       }
  //       return item;
  //     })
  //   );
  // };

  return (
    <div
      id="authentication-modal"
      className="modal flex justify-center items-center"
    >
      <div
        id="authentication"
        tabIndex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-xl max-h-full m-auto top-20 ">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg dark:bg-gray-700 shadow-xl shadow-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Edit Product
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
                onClick={handelEdit}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <form className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="$299"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Category
                  </label>
                  <Select
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    options={transformedCategoriesData}
                    onChange={handleSelectedCategory}
                    value={selectedCategoriesList}
                  />
                </div>
                <div className="upload col-span-2">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 "
                    htmlFor="file_input"
                  >
                    Upload file
                  </label>
                  <input
                    className="block w-full text-sm p-[2px] text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:h-10"
                    aria-describedby="file_input_help"
                    id="file_input"
                    type="file"
                    multiple
                    required
                    onChange={(e) => {
                      handleFileUpload(e);
                    }}
                  />
                  <div className="flex gap-1">
                    {imageUrl.map((img) => {
                      return (
                        <div key={img} className="m-4">
                          <img src={img} className="size-14" />
                          {/* <button
                            className="relative"
                            onClick={() => updateObjectAtIndex(img)}
                          >
                            <X size={15} color="red" className="" />
                          </button> */}
                        </div>
                      );
                    })}
                  </div>
                  <p
                    className="mt-1 text-sm text-gray-500"
                    id="file_input_help"
                  >
                    SVG, PNG, JPG or WEBP (MAX. 800x400px).
                  </p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Size
                  </label>
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={transformedSizesData}
                    onChange={handleSelectedSize}
                    value={selectedSizesList}
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    is New
                  </label>
                  <Select
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    options={boolVal}
                    onChange={handleSelectedNew}
                    value={selectedNew}
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="isEssential"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    is Essential
                  </label>
                  <Select
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    options={boolVal}
                    onChange={handleSelectedEssential}
                    value={selectedEssential}
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    is Season
                  </label>
                  <Select
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    options={boolVal}
                    onChange={handleSelectedSeason}
                    value={selectedSeason}
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Description
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write product description here"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleAddNewPrduct}
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Update Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpEditProduct;
