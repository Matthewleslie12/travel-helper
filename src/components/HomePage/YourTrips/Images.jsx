import React, {useState} from "react";
import {grayHeart, activeHeart} from "../../../assets/icons/index";
import {AiFillStar} from "react-icons/ai";
import {ImLocation} from "react-icons/im";
import axios from "axios";

const Images = ({name, image, rating, location}) => {
  const [heartActive, setHeartActive] = useState(false);

  const handleHeartClick = () => {
    setHeartActive(!heartActive);
    saveTripToDatabase();
  };

  const saveTripToDatabase = async () => {
    try {
      const response = await axios.post("http://localhost:8080/trips", {
        // TODO - change link once deployed
        userId: 2,
        tripData: {
          title: name,
          rating: rating,
          location: location,
        },
      });
      console.log(response.data);
      console.log(rating);
      console.log(location);
      return <h1>Trip saved successfully!</h1>;
    } catch (error) {
      console.error("Error saving trip:", error);
    }
  };

  return (
    <>
      <div className="flex flex-row gap-3 flex-wrap overflow-scroll shadow-xl w-40 rounded-b-3xl pt-4">
        <div className="flex flex-col rounded-3xl ">
          <img src={image} alt="" className="w-40 rounded-3xl rounded-b-none" />
          <div className="px-2 bg-white  rounded-3xl rounded-t-none border ">
            <div className="flex justify-between pt-2 text-sm ">
              <p className="text-blackText font-bold">{name}</p>
              <p className="pb-2 flex flex-row items-center">
                <AiFillStar className="text-mainBlue" />
                {rating}
              </p>
            </div>
            <p className="text-darkGrayText pb-2 flex flex-row items-center gap-1 text-sm">
              <ImLocation />
              {location}
            </p>
            <div className="flex justify-end pb-2">
              <button className="" onClick={handleHeartClick}>
                <img
                  src={heartActive ? activeHeart : grayHeart}
                  alt=""
                  className="w-6"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Images;
