import { CiBullhorn } from "react-icons/ci";
const KeyFeatures = (props) => {
  return (
    <div className="mt-[230px]">
      <center>
        <h2 className="font-bold font-sans text-4xl col to-blue-100 flex justify-center"><strong>━━</strong>Key Features<span>━━</span></h2>
      </center>
      <div className="flex justify-evenly items-center mt-[50px]">
      <div className=" mx-4 w-[300px] h-[200px] px-3 border border-blue-400 rounded shadow-lg hover:shadow-md hover:shadow-blue-700 hover:cursor-pointer ">
          <center>
            <h1 className="m-1 py-1">
              <CiBullhorn size={32} />
            </h1>
          </center>
          <strong>Feature 1:</strong>
          {props.Feature1}
          <p>{props.descr1}</p>
        </div>
        <div className=" mx-4 w-[300px] h-[200px] px-3 border border-blue-400 rounded shadow-lg hover:shadow-md hover:shadow-blue-700 hover:cursor-pointer ">
          <center>
            <h1 className="m-1 py-1">
              <CiBullhorn size={32} />
            </h1>
          </center>
          <strong>Feature 2:</strong>
          {props.Feature2}
          <p>{props.descr2}</p>
        </div>
        <div className=" mx-4 w-[300px] h-[200px] px-3 border border-blue-400 rounded shadow-lg hover:shadow-md hover:shadow-blue-700 hover:cursor-pointer ">
          <center>
            <h1 className="m-1 py-1">
              <CiBullhorn size={32} />
            </h1>
          </center>
          <strong>Feature 3:</strong>
          {props.Feature3}
          <p>{props.descr3}</p>
        </div>
      </div>
      <div>
        <h1 className="mt-24 ml-28 font-bold font-sans text-4xl">
          Why Choose Us?
        </h1>
        <ul className="ml-28 flex flex-col gap-3">
          <li className="mt-14 font-sans">✅Solves Specific Problem</li>
          <li>✅Boost your Productivity and efficiency</li>
          <li>✅Cutting Technology For Modern World</li>
          <li>✅Open Ai Support</li>
          <li>✅Perfect Tool For the Developers</li>
        </ul>
      </div>
      <div>
        <button className="ml-28 mt-8 py-3 px-5 rounded-3xl border border-blue-400 hover:bg-blue-400">Get Started</button>
      </div>
    </div>
  );
};
export default KeyFeatures;
