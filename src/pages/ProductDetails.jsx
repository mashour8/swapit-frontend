/* eslint-disable react/prop-types */
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productsServer from "../services/prodcuts.service";
import draftServer from "../services/draft.service";
import { AuthContext } from "../context/auth.context";
import authService from "../services/users.service";

const ProductDetails = ({ selectedSize, setSelectedSize, setProductId }) => {
  const { user, isLoggedIn, draftOrder, authenticateUser } =
    useContext(AuthContext);
  const { productId } = useParams();
  const [oneProduct, setOneProduct] = useState(null);
  const [draft, setDraft] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const navigate = useNavigate();

  const handelSubmit = () => {
    if (selectedSize === null) {
      return;
    }
    updateCart();
    navigate("/cart");
  };

  const getUser = () => {
    if (!user) {
      return;
    }
    const id = user._id;
    authService
      .user(id)
      .then((response) => {
        setUserInfo(response.data);
        setDraft(response.data.draftOrder._id);
        console.log("get user ", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getProduct = () => {
    productsServer
      .getProduct(productId)
      .then((response) => {
        setOneProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateCart = () => {
    console.log("draftdraftdraft", draft);
    if (!draftOrder) {
      const body = {
        userId: user._id,
        products: [
          {
            productId: productId,
            size: selectedSize.name,
            quantity: 1,
          },
        ],
        orderStatus: "Draft",
      };
      draftServer
        .createDraft(body)
        .then((response) => {
          authService
            .updateUser(user._id, { draftOrder: response.data._id })
            .then((response) => {
              console.log("new draft id : ", response.data.draftOrder);
              setDraft(response.data.draftOrder);
            })
            .catch((err) => {
              console.log(err);
            });
          console.log("draft response.data._id ", response.data._id);
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    }

    if (!draft || !draft.products) {
      console.log("Draft is null or does not contain products");
      console.log("draft", draft);
      return;
    }

    // const updateUser = (body) => {

    // };

    const updatedProducts = draft.products.map((product) => {
      if (product.productId === productId) {
        return {
          ...product,
          selectedSize: selectedSize.name,
        };
      }
      return product;
    });

    // Add the new product if it doesn't already exist
    if (!updatedProducts.some((product) => product.productId === productId)) {
      updatedProducts.push({
        productId: productId,
        size: selectedSize.name,
        quantity: 1,
      });
    }

    const updatedDraft = { ...draft, products: updatedProducts };

    draftServer
      .updateDraft(draft._id, updatedDraft)
      .then((response) => {
        console.log("Updated Cart", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDraft = () => {
    if (!userInfo || !userInfo.draftOrder) {
      return;
    }
    draftServer
      .getDraft(draftOrder)
      .then((response) => {
        setDraft(response.data);
        console.log("draft data from user: ", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   getProduct();
  //   if (draftOrder) {
  //     getDraft();
  //     // getProduct();
  //   }
  // }, []);

  useEffect(() => {
    getUser();
    getProduct();
  }, [productId]);

  useEffect(() => {
    if (draftOrder) {
      getDraft();
    }
  }, [draftOrder, userInfo]);

  const reviews = { href: "#", average: 4, totalCount: 117 };

  const product = {
    sizes: [
      { name: "50/56", inStock: false },
      { name: "62/68", inStock: true },
      { name: "74/80", inStock: true },
      { name: "86/92", inStock: true },
      { name: "98/104", inStock: true },
      { name: "116", inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="">
      {oneProduct && (
        <div className="container grid grid-cols-3 gap-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 col-span-2 p-12">
            {oneProduct.images.map((imgs, index) => {
              return (
                <div key={index}>
                  <img
                    className="h-auto max-w-full rounded-lg border-slate-100 border"
                    src={imgs}
                    alt=""
                  />
                </div>
              );
            })}
          </div>

          <div className="prodect-info flex flex-col pt-8 ">
            <h1 className="text-3xl tracking-tight text-gray-900 font-light ">
              {oneProduct.name}
            </h1>
            <p className="mt-4">${oneProduct.price}</p>
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-[#6eb6e8] hover:text-[#5d9cca]"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>
            <div className="bg-gray-200 h-[1px] mt-4"></div>

            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <a className="text-sm font-medium text-[#6eb6e8] hover:text-[#5d9cca]">
                  Size guide
                </a>
              </div>

              <RadioGroup
                value={selectedSize}
                onChange={setSelectedSize}
                className="mt-4"
              >
                <RadioGroup.Label className="sr-only">
                  Choose a size
                </RadioGroup.Label>
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  {oneProduct.sizes.map((size) => (
                    <RadioGroup.Option
                      key={size.name}
                      value={size}
                      disabled={!size.inStock}
                      className={({ active }) =>
                        classNames(
                          size.inStock
                            ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                            : "cursor-not-allowed bg-gray-50 text-gray-200",
                          active ? "ring-2 ring-[#6eb6e8]" : "",
                          "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                        )
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <RadioGroup.Label as="span">
                            {size.name}
                          </RadioGroup.Label>
                          {size.inStock ? (
                            <span
                              className={classNames(
                                active ? "border" : "border-2",
                                checked
                                  ? "border-[#6eb6e8]"
                                  : "border-transparent",
                                "pointer-events-none absolute -inset-px rounded-md"
                              )}
                              aria-hidden="true"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                stroke="currentColor"
                              >
                                <line
                                  x1={0}
                                  y1={100}
                                  x2={100}
                                  y2={0}
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          )}
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
            <button
              type="submit"
              onClick={handelSubmit}
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-[#6eb6e8] px-8 py-3 text-base font-medium text-white hover:bg-[#5d9cca] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
            <div className="bg-gray-200 h-[1px] mt-4"></div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6 mt-8">
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900 mb-6">
                  Description
                </h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {oneProduct.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
