/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import img1 from "../../assets/images/newborn-baby-clothing-checklist-1620x1115.webp";
import { FilePenLine, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { Switch } from "@headlessui/react";
import Checkbox from "../../components/others/Checkbox";
import PopUpAddProduct from "../../components/others/PopUpAddProduct";
import productsServer from "../../services/prodcuts.service";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import ReactPaginate from "react-paginate";

import "../../components/others/PaginationWithLibrary.css";
import PopUpEditProduct from "../../components/others/PopUpEditProduct";

const LIMIT = 10;

const ProductsAdminPage = () => {
  // TO DO refactor all the names

  const [offset, setOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const totalPages = Math.ceil(totalCount / LIMIT);

  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  const [value, setValue] = useState(false);
  const [enabled, setEnabled] = useState(false);

  // const [selectedCategory, setSelectedCategory] = useState("");
  // const [selectedSize, setSelectedSize] = useState([]);
  // const [selectedIsNew, setSelectedIsNew] = useState(false);
  // const [selectedIsEssential, setSelectedIsEssential] = useState(false);
  // const [selectedIsSeason, setSelectedIsSeason] = useState(false);

  const [products, setProducts] = useState([]);
  const [copyProduct, setCopyProduct] = useState(null);

  const [productID, setProductID] = useState("");

  const handlePageClick = (event) => {
    const newOffset = event.selected * LIMIT;
    if (newOffset < 0 || newOffset >= totalCount) {
      return;
    }
    setOffset(newOffset);
  };

  var notyf = new Notyf({
    position: {
      x: "right",
      y: "top",
    },
  });

  const getAllProducts = () => {
    productsServer
      .getAllProducts(LIMIT, offset)
      .then((response) => {
        setProducts(response.data.products);
        setTotalCount(response.data.totalCount);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // need fix
  useEffect(() => {
    getAllProducts(LIMIT, offset);
  }, [copyProduct, offset, totalCount]);

  const handelSetEnabled = (productId) => {
    const productIndex = products.findIndex((product) => {
      return product._id === productId;
    });
    console.log("productId", productId);
    // Make a copy of the products array
    const updatedProducts = [...products];

    // Update the isActive property of the product at the found index
    updatedProducts[productIndex] = {
      ...updatedProducts[productIndex],
      isActive: !updatedProducts[productIndex].isActive,
    };
    console.log("is active ? : ", updatedProducts[productIndex].isActive);

    console.log("updatedProducts", updatedProducts[productIndex]);
    // Update the state with the updated products array
    // setCopyProduct(updatedProducts[productIndex]);
    updateProduct(productId, updatedProducts[productIndex]);
  };

  //need fix

  const updateProduct = (id, newData) => {
    productsServer
      .updateProduct(id, newData)
      .then((response) => {
        setCopyProduct(response.data);
        // console.log(copyProduct)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = () => {
    setValue(!value);
  };

  useEffect(() => {
    //here must be the products id
    // setList(products);
  }, [list]);

  const handleSelectAll = (e) => {
    setIsCheckedAll(!isCheckedAll);
    setIsCheckedAll(list.map((li) => li.id));
    if (isCheckedAll) {
      setIsCheckedAll([]);
    }
  };
  const handelEdit = (e) => {
    const id = e.currentTarget.id;
    setIsEditModalOpen(!isEditModalOpen);
    console.log("id :", typeof id);
    setProductID(id);
  };
  const handelDelete = (e) => {
    // handel delete one time
    console.log("e.currentTarget.id", e.currentTarget.id);
    const id = e.currentTarget.id;
    productsServer
      .deleteProduct(id)
      .then((response) => {
        console.log("response.data", response.data);
        notyf.success(
          `product ${response.data.message} has been successfully deleted`
        );
        getAllProducts(LIMIT, offset);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handel add new product

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  // handel add new product
  const [isAddNewModalOpen, setIsAddNewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleAddNewPrductClick = () => {
    // Code to toggle the modal goes here
    console.log("handleAddClick");
    setIsAddNewModalOpen(!isAddNewModalOpen); // Toggle modal state
  };

  return (
    <div className="continer bg-[#f0f0f5] w-screen h-screen overflow-scroll">
      {/* starting code  */}
      {isAddNewModalOpen && (
        <PopUpAddProduct
          handleAddNewPrductClick={handleAddNewPrductClick}
        ></PopUpAddProduct>
      )}

      {isEditModalOpen && (
        <PopUpEditProduct
          handelEdit={handelEdit}
          productID={productID}
        ></PopUpEditProduct>
      )}
      {/* end code  */}

      <h1 className="font-medium text-2xl mt-12 m-6 p-2">Products page</h1>
      <div className="m-6 p-8  bg-white rounded-lg ">
        <button
          type="submit"
          onClick={handleAddNewPrductClick}
          className="mt-8 p-2 shadow-sm bg-[#b7f088] rounded-md text-sm font-medium"
        >
          Add new item
        </button>
        <table className="table-auto mt-8">
          <thead>
            <tr className="font-light">
              <th className="min-w-14">
                <Checkbox
                  type="checkbox"
                  id={"selectAll"}
                  handleClick={handleSelectAll}
                  isChecked={isCheckedAll}
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
            {products.map((product, index) => (
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
                <td className="border px-4 py-2">
                  {/* to do later */}
                  {index + 1}
                </td>
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
                      onChange={() => handelSetEnabled(product._id)}
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
                    <button onClick={handelEdit} id={product._id}>
                      <FilePenLine size={20} color="#005cc5" />
                    </button>
                    <button onClick={handelDelete} id={product._id}>
                      <Trash size={20} color="red" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination controls */}
        <ReactPaginate
          containerClassName="pagination"
          activeClassName="active"
          pageClassName="page-item"
          onPageChange={handlePageClick}
          breakLabel="..."
          pageCount={totalPages}
          previousLabel={<button>Previous Page</button>}
          nextLabel={<button>Next Page</button>}
        />
      </div>
    </div>
  );
};

export default ProductsAdminPage;
