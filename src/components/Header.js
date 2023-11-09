import logo from "../utils/logo.jpg";
const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center m-4">
        <div className="header-image">
          <img className=" m-5 w-28" src={logo} alt="logo" />
        </div>
        <div>
          <ul className="flex justify-between">
            <li className="m-3 p-3 hover:text-blue-300 cursor-pointer text-xl">Home</li>
            <li className="m-3 p-3 hover:text-blue-300 cursor-pointer text-xl">Features</li>
            <li className="m-3 p-3 hover:text-blue-300 cursor-pointer text-xl">Plans</li>
            <li className="m-3 p-3 hover:text-blue-300 cursor-pointer text-xl">Contact Us</li>
            <li className="m-3 p-3 hover:text-blue-300 cursor-pointer text-xl">Login/SignUp</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
