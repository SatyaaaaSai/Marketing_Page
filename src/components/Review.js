import people from "../utils/data.js";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-3/6 h-auto bg-gray-300 flex flex-col items-center p-4 mt-14 ">
          <div className="relative w-[150px] h-[150px] rounded-full mx-auto mb-6 bg-blue-400">
            <img src={image} alt="photo" className="w-full h-full block object-cover rounded-full relative m-2" />
            <span className="relative top-0 left-0 to-white bg-blue-600 rounded-full n">
              <FaQuoteRight/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
