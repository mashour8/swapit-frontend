/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import newBadge from "../../assets/images/newBadge.png";
import img1 from "../../assets/images/MARFL_IMAGE1_2560x2560.webp";
import productsServer from "../../services/prodcuts.service";
import { Link } from "react-router-dom";
const ItemSeasonCollections = ({ LIMT, offSet }) => {
  const [products, setProducts] = useState([]);

  const getAllProduct = () => {
    productsServer
      .getAllProducts(LIMT, offSet)
      .then((response) => {
        const productsList = response.data.products;
        setProducts(productsList);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleProductDetails = (id) => {};
  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div className="bg-white m-10">
      <div className=" max-w-2xl lg:max-w-7xl">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products &&
            products.map((product) => (
              <Link
                to={`/productDetails/${product._id}`}
                key={product._id}
                className="group relative"
                onClick={() => handleProductDetails()}
              >
                <img
                  src={newBadge}
                  alt="wq"
                  className="absolute top-0 right-0 w-1/5 hidden"
                />
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.images[0]}
                    alt=""
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full border rounded-lg p-4 px-8"
                  />
                </div>
                <div className="mt-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <div>
                        <span className="absolute inset-0" />
                        {product.name}
                      </div>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.category.name}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900 ">
                    ${product.price}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ItemSeasonCollections;
