import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StoryList, Suggest } from '../components/index';
import { loadStories } from '../store/actions/story.action';
import { uploadService } from '../services/upload.service';
import { storyService } from '../services/story.service';

const Home = () => {
	const navigate = useNavigate();
	const stories = useSelector((storeState) => storeState.storyReducer.stories);

	const [story, setStory] = useState(storyService.getDefaultStory());

	useEffect(() => {
		loadStories();
	}, []);

	const onShareStory = async (image) => {
		const { secure_url } = await uploadService.uploadImg(image);
		console.log(secure_url);
		navigate(-1);
		//TODO: now i have the img url --> need add the story include text and img url
	};

	const onEditStory = (event) => {
		const { value, name: filedName } = event.target;
		setStory((prevData) => ({ ...prevData, [filedName]: value }));
	};

	const onDeleteStory = () => {
		setStory(() => storyService.getDefaultStory());
	};

	return (
		<div className='home'>
			<StoryList stories={stories} />
			<Suggest />
			<Outlet context={{ story, onEditStory, onDeleteStory, onShareStory }} />
		</div>
	);
};

export default Home;
