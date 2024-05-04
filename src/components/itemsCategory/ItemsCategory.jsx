const ItemsCategory = () => {
  return (
    <div className="item-category bg-[#f3f2ee] max-h-[60%] mt-12 mb-12">
      <div className="contianer columns-3 text-center m-[20px] p-10">
        <div className="item-left-side flex flex-col justify-center items-center relative group-hover:opacity-75">
          <img
            src="https://cdn.sanity.io/images/kaeaimuz/production/045b98bb5b19534106d9a64af9bd7667533559a2-1296x1084.jpg/shop-sleep-cta2.jpg?w=1296&h=1084&auto=format"
            alt=""
            className="h-[400px] object-cover object-center rounded-lg group-hover:opacity-75"
          />
          <button className="bg-[#cae0e8] p-4 rounded-lg absolute bottom-4 uppercase group-hover:opacity-75">
            shop sleep
          </button>
        </div>
        <div className="item-right-side flex flex-col justify-center items-center relative group-hover:opacity-75">
          <img
            src="https://cdn.sanity.io/images/kaeaimuz/production/73c961bfb5559f7f47464f0e96673257e8744be4-2000x2000.jpg/website_image_styledflatlay_2000x2000.jpg?w=2000&h=2000&auto=format"
            alt=""
            className="h-[400px] object-cover object-center rounded-lg group-hover:opacity-75"
          />
          <button className="bg-[#cae0e8] p-4 rounded-lg absolute bottom-4 uppercase group-hover:opacity-75">
            shop Check list
          </button>
        </div>
        <div className="item-right-side flex flex-col justify-center items-center relative group-hover:opacity-75">
          <img
            src="https://cdn.sanity.io/images/kaeaimuz/production/df61ccc692f210795a08032b8a7834c64a72990e-1296x1084.jpg/shop-waterproof.jpg?w=1296&h=1084&auto=format"
            alt=""
            className="h-[400px] w-[320px] object-center rounded-lg object-cover group-hover:opacity-75"
          />
          <button className="bg-[#cae0e8] p-4 rounded-lg absolute bottom-4 uppercase group-hover:opacity-75">
            shop Waterproof
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemsCategory;
