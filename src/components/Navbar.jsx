import { NavLink } from 'react-router-dom';
import Home from '../assets/svgs/btns/home.svg';
import Search from '../assets/svgs/btns/search.svg';
import Message from '../assets/svgs/btns/messenger.svg';
import Heart from '../assets/svgs/btns/heart.svg';
import Avatar from '../assets/images/avatar.png';
import Logo from '../assets/svgs/logo-camera.svg';
import Explore from '../assets/svgs/btns/explore.svg';
import Create from '../assets/svgs/btns/create.svg';
import Menu from '../assets/svgs/btns/menu2.svg';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<NavLink to='/' className='logo'>
				<img src={Logo} alt='logo' />
			</NavLink>
			<div className='navbar-links'>
				<NavLink to='/' className='mobile-display'>
					<img src={Home} alt='home' />
					<div className='name'>Home</div>
				</NavLink>
				<NavLink to='/' className='mobile-display'>
					<img src={Search} alt='search' />
					<div className='name'>Search</div>
				</NavLink>
				<NavLink to='/explore'>
					<img src={Explore} alt='explore' />
					<div className='name'>Explore</div>
				</NavLink>
				<NavLink to='/messages' className='mobile-display'>
					<img src={Message} alt='messages' />
					<div className='name'>Messages</div>
				</NavLink>
				<NavLink to='/' className='mobile-display'>
					<img src={Heart} alt='notifications' />
					<div className='name'>Notifications</div>
				</NavLink>
				<NavLink to='/'>
					<img src={Create} alt='create' />
					<div className='name'>Create</div>
				</NavLink>
				<NavLink to='/profile' className='mobile-display'>
					<img src={Avatar} alt='profile image' className='profile' />
					<div className='name'>Profile</div>
				</NavLink>
			</div>
			<div className='menu'>
				<img src={Menu} alt='menu' />
			</div>
		</nav>
	);
};

export default Navbar;
