import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "../utils/FooterData";
const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="flex justify-between">
        <div>
          <h1 className="m-10 text-white text-3xl leading-normal">
            <span className="text-teal-500 px-3 text-4xl">Free</span>Until
            You're Ready to launch
          </h1>
        </div>
        <div className="mt-12 flex justify-end">
          <div>
            <input
              type="text"
              placeholder="Enter your Email "
              className="mr-8 p-2 w-64 bg-gray-200 text-black-200 rounded-md border border-gray-200 focus:outline-none focus:ring focus:ring-blue-300"
            ></input>
          </div>
          <div className="mr-10 mt-[-10px]">
            <button className="bg-teal-500 p-2 rounded-lg m-3 text-black hover:bg-teal-700">Submit</button>
          </div>
        </div>
      </div>
      <ItemsContainer/>
      <div className="grid grid-cols-3 gap-10 text-sm text-center pt-2 pb-8 text-gray-400 mt-6">
        <span>© 2023 Satya Sai. All Rights Reserverd</span>
        <span>Terms • PrivaryPolicy</span>
        <SocialIcons Icons={Icons}/>
      </div>
    </footer>
  );
};

export default Footer;
