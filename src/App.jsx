import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Explore, Messages, Profile } from './pages/index';
import { Navbar } from './components/index';

const App = () => {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/explore' element={<Explore />} />
					<Route path='/messages' element={<Messages />} />
					<Route path='/profile' element={<Profile />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
