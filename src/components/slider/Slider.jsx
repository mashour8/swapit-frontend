import { Link } from "react-router-dom";
import sliderImg from "../../assets/images/newborn-baby-clothing-checklist-1620x1115.webp";

const Slider = () => {
  return (
    <div className="slider-home items-center flex">
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-2 ">
        <div className="right-side w-[50%] columns-1">
          <img className="rounded-lg" src={sliderImg} alt="" />
        </div>
        <div className="slider-text flex flex-col justify-center items-center columns-1 ">
          <h3 className="m-10 p-10 font-bold text-center text-4xl	">
            WE LOVE TO SHARE{" "}
            <span>
              <br />
              let's do it!
            </span>
          </h3>
          <Link className="m-4 p-4 shadow-md bg-[#b7f088] rounded-md text-lg font-medium">
            SHOP NOW!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
