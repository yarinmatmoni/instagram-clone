import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StoryList, Suggest } from '../components/index';
import { loadStories } from '../store/actions/story.action';
// import { storyService } from '../services/story.service';

const Home = () => {
	const stories = useSelector((storeState) => storeState.storyReducer.stories);

	useEffect(() => {
		loadStories();
	}, []);

	return (
		<div className='home'>
			<StoryList stories={stories} />
			<Suggest />
			<Outlet />
		</div>
	);
};

export default Home;
