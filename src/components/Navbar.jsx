import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/'>Search</NavLink>
			<NavLink to='/explore'>Explore</NavLink>
			<NavLink to='/messages'>Messages</NavLink>
			<NavLink to='/'>Notifications</NavLink>
			<NavLink to='/'>Create</NavLink>
			<NavLink to='/profile'>Profile</NavLink>
		</nav>
	);
};

export default Navbar;
