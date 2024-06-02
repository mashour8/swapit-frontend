/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import draftServer from "../services/draft.service";
import { AuthContext } from "../context/auth.context";
import authService from "../services/users.service";
import productsServer from "../services/prodcuts.service";
import orderServer from "../services/orders.service";

const ShopingCart = ({ selectedSize, productId, setProductId }) => {
  const { user, isLoggedIn, draftOrder, authenticateUser } =
    useContext(AuthContext);
  const [cart, setCart] = useState(null);
  const [order, setOrder] = useState(null);
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [productsIds, setProductsIds] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();

  const getUser = () => {
    authService
      .user(user._id)
      .then((response) => {
        setUserInfo(response.data);
        getDraftOrder();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDraftOrder = () => {
    console.log("userInfo.draftOrder", userInfo.draftOrder);
    if (!userInfo.draftOrder) {
      return;
    }
    let id = userInfo.draftOrder._id;
    draftServer
      .getDraft(id)
      .then(async (response) => {
        setCart(response.data);
        setQuantities(response.data.products.map(() => 1));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelCart = () => {
    if (cart && cart.products) {
      cart.products.forEach((proId) => {
        // Check if the productId already exists in products array
        if (!products.find((product) => product._id === proId.productId)) {
          productsServer
            .getProduct(proId.productId)
            .then((product) => {
              setProducts((prevProducts) => [...prevProducts, product.data]);
              setProductId((prevProductIds) => [
                ...prevProductIds,
                product.data._id,
              ]);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });

      // Check if productId from props is in products array
      if (!products.find((product) => product._id === productId)) {
        productsServer
          .getProduct(productId)
          .then((product) => {
            setProducts((prevProducts) => [...prevProducts, product.data]);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (userInfo) {
      getDraftOrder();
    }
  }, [userInfo]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (cart && cart.products) {
        const productIds = cart.products.map((proId) => proId.productId);
        const productData = await Promise.all(
          productIds.map((id) => productsServer.getProduct(id))
        );
        setProducts(productData.map((response) => response.data));
      }
    };

    fetchProducts();
  }, [cart]);

  const handelSubmit = (e) => {
    // console.log("selectedSize", selectedSize);
    // console.log("cart", cart);
    console.log("products", products);
    console.log("productId", productId);
    // console.log("cart", cart);
    createCart();
    navigate("/checkOut");
  };

  const createCart = () => {
    orderServer
      .createOrder(cart)
      .then((response) => {
        console.log("cart :", response.data);
        const orderId = response.data._id;
        setOrder(response.data);

        // Update user's orders field with the new order ID at the first index
        authService
          .updateUser(user._id, {
            $push: {
              orders: {
                $each: [orderId], // Add the new orderId
                $position: 0, // Insert it at the first index
              },
            },
          })
          .then((updateResponse) => {
            console.log(updateResponse.data);
          })
          .catch((updateErr) => {
            console.log("Error updating user:", updateErr);
          });
      })
      .catch((err) => {
        console.log("Error creating order:", err);
      });
  };

  const decrement = (index) => {
    let updatedProducts = [];
    if (quantities[index] === 1) {
      // Remove the item from the list
      setProducts((prevProducts) => {
        updatedProducts = [...prevProducts];
        const curr = updatedProducts[index];

        // console.log("index is: ", updatedProducts[index]);
        const updatedItems = { products: updatedProducts };
        console.log("updatedItems", updatedItems);
        console.log("curr", curr);

        const cartUpdt = cart.products.filter(
          (product) => product.productId !== curr._id
        );
        console.log("cartUpdt", cartUpdt);

        updatedProducts.splice(index, 1);
        if (quantities.length === 0) {
          draftServer
            .deleteDraft(draftOrder)
            .then((response) => {
              console.log("less than 1 in the cart", response.data);
              //recheck
              authService
                .updateUser({ draftOrder: null })
                .then((response) => {
                  console.log(response.data);
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        }
        const updateDraft = () => {
          draftServer
            .updateDraft(draftOrder, { products: cartUpdt })
            .then((response) => {
              setProducts(response.data.products);
              authenticateUser();
              //recheck
            })
            .catch((err) => {
              console.log(err);
            });
        };
        updateDraft();
        return updatedProducts;
      });
      setQuantities((prevQuantities) => {
        const updatedQuantities = [...prevQuantities];
        updatedQuantities.splice(index, 1);
        return updatedQuantities;
      });
    } else {
      setQuantities((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] = prevQuantities[index] - 1;
        return newQuantities;
      });
    }
  };

  const increment = (index) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = prevQuantities[index] + 1;
      return newQuantities;
    });
  };

  const calculateTotal = () => {
    let total = 0;
    products.forEach((product, index) => {
      total += product.price * quantities[index];
    });
    return total.toFixed(2); // Optionally round to two decimal places
  };
  const handelQuantity = (e) => {
    e.target.value(quantity);
  };

  const calculateTotalWithVat = () => {
    const total = parseFloat(calculateTotal());
    const vatAmount = total * 0.05; // 5% VAT
    return (total - vatAmount).toFixed(2);
  };

  return (
    <div className="flex flex-col">
      <div className=" p-8 bg-[#FBF6F2] w-[1024px] flex flex-col gap-8">
        <Link to={"/"}>
          <div className="flex flex-row gap-4 justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              strokeWidth={1.5}
              stroke="grey"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>

            <p className="uppercase text-gray-600">Continue Shoping</p>
          </div>
        </Link>

        <h1 className="text-3xl text-center">Your Shopping Cart</h1>
      </div>
      <div className="flex flex-col mt-12">
        <h1 className="text-3xl font-light mb-12">
          Delivery or Click & Collect
        </h1>
        <table className="cart mb-8 w-full">
          <thead>
            <tr className="justify-around">
              <th className="">Products</th>
              <th className="">Quantity</th>
              <th className="">Price</th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product, index) => (
                <tr key={product._id}>
                  <td>
                    <div className="flex gap-6 m-4">
                      <img
                        className="w-32 border rounded-lg"
                        src={product.images[0]}
                        alt=""
                      />
                      <h3 className="font-medium">{product.name}</h3>
                    </div>
                  </td>
                  <td>
                    <form className="max-w-xs mx-auto ml-4">
                      <div className="relative flex items-center max-w-[7rem]">
                        <button
                          type="button"
                          id="decrement-button"
                          className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                          onClick={() => decrement(index)}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          id="quantity-input"
                          className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 "
                          value={quantities[index]}
                          onChange={handelQuantity}
                          required
                        />
                        <button
                          type="button"
                          id="increment-button"
                          className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                          onClick={() => increment(index)}
                        >
                          +
                        </button>
                      </div>
                    </form>
                  </td>
                  <td>${product.price}</td>
                  <td></td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="ml-4 p-8 bg-[#FBF6F2] flex flex-col col-span-1 w-full">
          <h1 className="font-normal text-2xl">Order Summary</h1>
          <hr className="mt-4" />
          <div className="flex flex-row gap-20 w-full justify-between p-6">
            <p>
              Subtotal{" "}
              <span className="text-gray-400 text-xs">(not Including VAT)</span>
            </p>
            <p>${calculateTotalWithVat()}</p>
          </div>
          <div className="flex flex-row gap-20 w-full justify-between p-6">
            <p>
              TOTAL{" "}
              <span className="text-gray-400 text-xs">(Including GST)</span>
            </p>
            <p>${calculateTotal()}</p>
          </div>
          <button
            type="submit"
            onClick={handelSubmit}
            className="m-4 p-4 shadow-md bg-[#b7f088] rounded-md text-lg font-medium"
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;
