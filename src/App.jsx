import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Explore, Messages, Profile } from './pages/index';
import { Navbar } from './components/index';

const App = () => {
	return (
		<div className='main-layout'>
			<Router>
				<Navbar />
				<div className='page-layout'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/explore' element={<Explore />} />
						<Route path='/messages' element={<Messages />} />
						<Route path='/profile' element={<Profile />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
};

export default App;
