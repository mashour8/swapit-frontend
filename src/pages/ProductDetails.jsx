import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

const ProductDetails = () => {
  const reviews = { href: "#", average: 4, totalCount: 117 };
  const product = {
    name: "Basic Tee 6-Pack",
    price: "$192",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Men", href: "#" },
      { id: 2, name: "Clothing", href: "#" },
    ],
    images: [
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
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
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="container grid grid-cols-3 gap-4">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 gap-4 col-span-2 p-12">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="prodect-info flex flex-col pt-8 ">
        <h1 className="text-3xl tracking-tight text-gray-900 font-light ">
          Vanilla Nautical 4 Pack Zip Growsuit
        </h1>
        <p className="mt-4">$13.00</p>
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
        {/* Sizing */}

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
              {product.sizes.map((size) => (
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
                      <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                      {size.inStock ? (
                        <span
                          className={classNames(
                            active ? "border" : "border-2",
                            checked ? "border-[#6eb6e8]" : "border-transparent",
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
              <p className="text-base text-gray-900">{product.description}</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

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
  );
};

export default ProductDetails;
