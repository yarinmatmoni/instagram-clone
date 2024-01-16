import { useEffect, useState } from 'react';
import { StoryList } from '../components/index';
import { storyService } from '../services/story.service';

const Home = () => {
	const [stories, setStories] = useState(null);

	useEffect(() => {
		loadStories();
	}, []);

	const loadStories = async () => {
		try {
			const stories = await storyService.query();
			setStories(stories);
		} catch (error) {
			console.log('error:', error);
		}
	};

	return (
		<div className='home'>
			<StoryList stories={stories} />
		</div>
	);
};

export default Home;
