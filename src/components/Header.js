import { Link } from "react-router-dom";
import Logo from "../images/loogoo.png";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import "../../src/Style/navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);
  const navigate = useNavigate();
  

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img alt="logo" src={Logo}></img>
      </div>
      <div className="navbar-left">
        <ul>
          <HomeIcon color="primary" />
          <li>
            <Link to="/">Home</Link>
          </li>
          <PrecisionManufacturingIcon color="primary" />
          <li>
            <Link to="/products">Product</Link>
          </li>
          <InfoIcon color="primary" />
          <li>
            <Link to="/about">About</Link>
          </li>

          {/* <ElectricalServicesIcon color="primary" />
          <li>Services</li> */}
          <ConnectWithoutContactIcon color="primary" />
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        {isLoggedin ? (
          <button className="login-button" onClick={() => setIsLoggedin(false)}>
            Logout
          </button>
        ) : (
          <button className="login-button" onClick={() => setIsLoggedin(true)}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
