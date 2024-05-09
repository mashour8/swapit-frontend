import { useRef, useEffect, useState } from "react";
import productsServer from "../../services/prodcuts.service";

const SwiperComponent = () => {
  const [products, setProducts] = useState([]);

  const getAllProduct = () => {
    productsServer
      .getAllProducts(10, 0)
      .then((response) => {
        const productsList = response.data.products;
        setProducts(productsList);
        console.log("productsList SwiperComponent: ", productsList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 max-w-screen-xl">
      <h2 className="text-4xl tracking-tight text-gray-900 text-center m-6 font-light">
        Essentials Best Sellers
      </h2>
      <div className="grid grid-flow-col overflow-x-auto whitespace-nowrap">
        {products &&
          products.map((product) => (
            <div className="inline-block px-4 py-2" key={product._id}>
              <div className="aspect-h-1 aspect-w-1  rounded-md lg:aspect-none group-hover:opacity-75">
                <img
                  src={product.images[0]}
                  alt="Wqw"
                  className="object-cover object-center border rounded-lg p-4 px-8 w-[320px] h-[380px]"
                />
              </div>
              <div className="mt-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category.name}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900 ">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SwiperComponent;
