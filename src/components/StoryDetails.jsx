import { useNavigate, useParams } from 'react-router-dom';
import { CommentList, Modal } from './index';
import Back from '../assets/svgs/btns/back.svg';
import Avatar from '../assets/images/avatar.png';
import { storyService } from '../services/story.service';
import { useEffect, useState } from 'react';

const StoryDetails = () => {
	const navigate = useNavigate();
	const { storyId } = useParams();
	const [story, setStory] = useState();

	useEffect(() => {
		loadStory();
	}, []);

	const loadStory = async () => {
		setStory(await storyService.getStory(storyId));
	};

	console.log(story);

	return (
		<Modal>
			<div className='story-details-container'>
				<div className='story-details-header'>
					<img src={Back} alt='back' onClick={() => navigate(-1)} />
					<div className='title'>Comments</div>
				</div>
				<CommentList comments={story?.comments} text={story?.txt} byUser={story?.by} />
				{/* TODO: data-disabled */}
				<div className='story-details-input'>
					<div className='image-container'>
						<img src={Avatar} alt='profile image' />
					</div>
					<input type='text' placeholder='Add a comment...' />
					<button data-disabled={true}>Post</button>
				</div>
			</div>
		</Modal>
	);
};

export default StoryDetails;
