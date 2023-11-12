import people from "../utils/data.js";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const prevButton = () => {
    setIndex((number) => {
      let num = number - 1;
      return checkNumber(num);
    });
  };
  const nextButton = () => {
    setIndex((number) => {
      let num = number + 1;
      return checkNumber(num);
    });
  };
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-3/6 h-[600px] flex flex-col items-center p-4 mt-14 ">
          <div className="relative w-[150px] h-[150px] rounded-full mx-auto mb-6 bg-blue-400">
            <img
              src={image}
              alt="photo"
              className="w-full h-full block object-cover rounded-full absolute m-2"
            />
            <span className="relative top-1 left-0 w-10 h-10 grid place-items-center rounded-full text-white bg-blue-800 ">
              <FaQuoteRight />
            </span>
          </div>
          <h3 className="font-semibold mb-1 text-[1.5rem]">{name}</h3>
          <p className="text-[0.75rem]">{job}</p>
          <p className="mt-6 px-20">{text}</p>
          <div className="flex justify-between items-center mt-[3rem]">
            <div className="text-lg m-6 bg-transparent text-blue-400 cursor-pointer hover:text-blue-700" onClick={prevButton}>
              <button>
                <FaChevronLeft />
              </button>
            </div>
            <div className="text-lg m-6 bg-transparent text-blue-400 cursor-pointer hover:text-blue-700" onClick={nextButton}>
              <button>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
