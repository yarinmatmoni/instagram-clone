import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StoryList, Suggest } from '../components/index';
import { addNewStory, loadStories, updateStory } from '../store/actions/story.action';
import { uploadService } from '../services/upload.service';
import { storyService } from '../services/story.service';

const Home = () => {
	const navigate = useNavigate();
	const stories = useSelector((storeState) => storeState.storyReducer.stories);

	const [story, setStory] = useState(storyService.getDefaultStory());

	useEffect(() => {
		loadStories();
	}, []);

	useEffect(() => {
		if (!story.imgUrl) return;
		addNewStory(story);
		onDeleteStory();
		navigate('/');
	}, [story.imgUrl]);

	const onShareStory = async (image) => {
		try {
			const { secure_url } = await uploadService.uploadImg(image);
			setStory((prevData) => ({ ...prevData, imgUrl: secure_url }));
		} catch (error) {
			console.error('Error uploading image:', error);
		}
	};

	const onEditStory = (event) => {
		const { value, name: filedName } = event.target;
		setStory((prevData) => ({ ...prevData, [filedName]: value }));
	};

	const onDeleteStory = () => {
		setStory(() => storyService.getDefaultStory());
	};

	const onUpdateStory = (event, storyId) => {
		const { name: fieldName } = event.target;
		updateStory(storyId, fieldName);
	};

	return (
		<div className='home'>
			<StoryList stories={stories} onUpdateStory={onUpdateStory} />
			<Suggest />
			<Outlet context={{ story, onEditStory, onDeleteStory, onShareStory }} />
		</div>
	);
};

export default Home;
