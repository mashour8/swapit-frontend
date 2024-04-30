/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import img1 from "../../assets/images/newborn-baby-clothing-checklist-1620x1115.webp";
import { FilePenLine, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { Switch } from "@headlessui/react";
import Checkbox from "../../components/others/Checkbox";
import PopUp from "../../components/others/PopUp";
import productsServer from "../../services/prodcuts.service";

// TO DO refactor all the names
const AdminProductsPage = () => {
  const [value, setValue] = React.useState(false);
  const [enabled, setEnabled] = useState(false);

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedIsNew, setSelectedIsNew] = useState(false);
  const [selectedIsEssential, setSelectedIsEssential] = useState(false);
  const [selectedIsSeason, setSelectedIsSeason] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    productsServer
      .getAllProducts()
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handelsetEnabled = () => {
    setEnabled();
  };
  const handleChange = () => {
    setValue(!value);
  };

  useEffect(() => {
    //here must be the products id
    // setList(products);
  }, [list]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handelDelete = (e) => {
    // handel delete one time
  };
  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  const handleAddNewPrductClick = () => {
    // Code to toggle the modal goes here
    console.log("handleAddClick");
    setModalOpen(!modalOpen); // Toggle modal state
  };

  return (
    <div className="continer bg-[#f0f0f5] w-screen h-screen">
      {/* starting code  */}
      {modalOpen && (
        <PopUp
          handleAddNewPrductClick={handleAddNewPrductClick}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          selectedIsNew={selectedIsNew}
          setSelectedIsNew={setSelectedIsNew}
          selectedIsEssential={selectedIsEssential}
          setSelectedIsEssential={setSelectedIsEssential}
          selectedIsSeason={selectedIsSeason}
          setSelectedIsSeason={setSelectedIsSeason}
        ></PopUp>
      )}

      {/* end code  */}

      <h1 className="font-medium text-2xl mt-12 m-6 p-8">Procuts page</h1>
      <div className="m-6 p-8  bg-white rounded-lg ">
        <button
          type="submit"
          onClick={handleAddNewPrductClick}
          className="mt-8 p-2 shadow-sm bg-[#b7f088] rounded-md text-sm font-medium"
        >
          Add new item
        </button>
        <table className="table-auto mt-8 ">
          <thead>
            <tr className="font-light">
              <th className="min-w-14">
                <Checkbox
                  key="2"
                  type="checkbox"
                  id={"2"}
                  handleClick={handleClick}
                  isChecked={isCheck.includes("2")}
                />
              </th>
              <th className="px-4 py-2 min-w-14 font-light text-sm">#</th>
              <th className="min-w-32 font-light text-sm">Image</th>
              <th className="min-w-32 w-full font-light text-sm">Name</th>
              <th className="w-full font-light text-sm">Price</th>
              <th className="min-w-36 w-full font-light text-sm">Category</th>
              <th className="w-full font-light text-sm">Status</th>
              <th className="w-full font-light text-sm">Options</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr className="font-light" key={product._id}>
                <td className="border px-4 py-2">
                  <Checkbox
                    key={product._id}
                    type="checkbox"
                    id={product._id}
                    handleClick={handleClick}
                    isChecked={isCheck.includes(product._id)}
                  />
                </td>
                <td className="border px-4 py-2">1</td>
                <td className="border flex justify-center items-center">
                  <img
                    src={product.images[0]}
                    alt=""
                    className="w-14 h-16 object-cover rounded-lg m-4"
                  />
                </td>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">${product.price}</td>
                <td className="border px-4 py-2">{product.category.name}</td>
                <td className="border px-4 py-2">
                  <div className="py-4">
                    <Switch
                      checked={product.isActive}
                      onChange={handelsetEnabled}
                      className={`${
                        product.isActive ? "bg-blue-600" : "bg-gray-200"
                      } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                      <span
                        className={`${
                          product.isActive ? "translate-x-6" : "translate-x-1"
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                      />
                    </Switch>
                  </div>
                </td>
                <td className="border px-4 py-2">
                  <div className="flex gap-4">
                    <Link to={"#"}>
                      <FilePenLine size={20} color="#005cc5" />
                    </Link>
                    <button onClick={handelDelete}>
                      <Trash size={20} color="red" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductsPage;
