import logo from "../utils/logo.jpg";
const Header=()=>{
    return(
        <div className="head">
            <div className="header-image">
                <img src={logo} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul className="ul">
                    <li className="li">Home</li>
                    <li className="li">Features</li>
                    <li className="li">Plans</li>
                    <li className="li">Contact Us</li>
                    <li className="li">Login/SignUp</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
