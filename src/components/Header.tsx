import LOGO from "./../assets/LOGO.svg";
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";

const renderLogoutButton = () => {
  const isLoggedIn = () => {
    return localStorage.getItem("email") && localStorage.getItem("password");
  };

  if (isLoggedIn()) {
    return (
      <Link to="/login">
        <div className="bg-indigo-400 border-10 h-12 w-12 rounded-full flex items-center justify-center">
          <LogOut />
        </div>
      </Link>
    );
  }
  return null;
};

const Header = () => {
  return (
    <div className="py-8 mx-8 flex items-center justify-between">
      <img src={LOGO} alt="franq-logo" />
      {renderLogoutButton()}
    </div>
  );
};

export default Header;
