import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../assets/svgs/btns/home.svg";
import HomeFull from "../assets/svgs/btns/home-full.svg";
import Search from "../assets/svgs/btns/search.svg";
import Message from "../assets/svgs/btns/messenger.svg";
import Heart from "../assets/svgs/btns/heart.svg";
import Explore from "../assets/svgs/btns/explore.svg";
import Create from "../assets/svgs/btns/create.svg";
import Menu from "../assets/svgs/btns/menu2.svg";

const Navbar = () => {
  const { pathname } = useLocation();
  const currentUser = useSelector(
    (storeState) => storeState.userReducer.currentUser
  );

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        <div className="logo-image"></div>
      </NavLink>
      <div className="navbar-links">
        <NavLink to="/" className="mobile-display">
          <img src={pathname === "/" ? HomeFull : Home} alt="home" />
          <div className="name">Home</div>
        </NavLink>
        <NavLink to="/" className="mobile-display">
          <img src={Search} alt="search" />
          <div className="name">Search</div>
        </NavLink>
        <NavLink to="/explore">
          <img src={Explore} alt="explore" />
          <div className="name">Explore</div>
        </NavLink>
        <NavLink to="/messages" className="mobile-display">
          <img src={Message} alt="messages" />
          <div className="name">Messages</div>
        </NavLink>
        <NavLink to="/" className="mobile-display">
          <img src={Heart} alt="notifications" />
          <div className="name">Notifications</div>
        </NavLink>
        <NavLink to="/create">
          <img src={Create} alt="create" />
          <div className="name">Create</div>
        </NavLink>
        <NavLink to="/profile" className="mobile-display">
          <img
            src={currentUser.imgUrl}
            alt="profile image"
            className="profile"
          />
          <div className="name">Profile</div>
        </NavLink>
      </div>
      <div className="menu">
        <div className="menu-item">
          <img src={Menu} alt="menu" />
          <div className="name">More</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
