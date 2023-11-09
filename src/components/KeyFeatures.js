import { CiBullhorn } from "react-icons/ci";
const KeyFeatures = (props) => {
  return (
    <div className="mt-[230px]">
      <center>
        <h2 className="font-bold font-sans text-4xl">--Key Features--</h2>
      </center>
      <div className="flex justify-evenly items-center mt-[50px]">
        <div className="mx-4 w-[300px] h-[200px] px-2 bg-gray-400">
        <center><h1 className="m-1 py-1"><CiBullhorn size={32}/></h1></center>
          <strong>Feature 1:</strong>
          {props.Feature1}
          <p>{props.descr1}</p>
        </div>
        <div className=" mx-4 w-[300px] h-[200px] px-2 bg-gray-400">
        <center><h1 className="m-1 py-1"><CiBullhorn size={32}/></h1></center>
          <strong>Feature 2:</strong>
          {props.Feature2}
          <p>{props.descr2}</p>
        </div>
        <div className=" mx-4 w-[300px] h-[200px] px-2 bg-gray-400">
        <center><h1 className="m-1 py-1"><CiBullhorn size={32}/></h1></center>
          <strong>Feature 3:</strong>
          {props.Feature3}
          <p>{props.descr3}</p>
        </div>
      </div>
    </div>
  );
};
export default KeyFeatures;
