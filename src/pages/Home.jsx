import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StoryList, Suggest } from '../components/index';
import { loadStories } from '../store/actions/story.action';
import { userService } from '../services/user.service';
import { storyService } from '../services/story.service';

const Home = () => {
	const stories = useSelector((storeState) => storeState.storyReducer.stories);

	const [story, setStory] = useState(storyService.getDefaultStory());

	useEffect(() => {
		loadStories();
	}, []);

	return (
		<div className='home'>
			<StoryList stories={stories} />
			<Suggest />
			<Outlet context={{ story }} />
		</div>
	);
};

export default Home;
