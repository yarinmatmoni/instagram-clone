import { Modal } from './index';
import Back from '../assets/svgs/btns/back.svg';
import Avatar from '../assets/images/avatar.png';

const StoryDetails = () => {
	return (
		<Modal>
			<div className='story-details'>
				<div className='story-details-header'>
					<img src={Back} alt='back' />
					<div className='title'>Comments</div>
				</div>
				<div className='temp-div'></div>
				{/* TODO: CommentList component */}
				{/* TODO: Comment component */}
				<div className='story-details-input'>
					<div className='image-container'>
						<img src={Avatar} alt='profile image' />
					</div>
					<input type='text' placeholder='Add a comment...' />
				</div>
			</div>
		</Modal>
	);
};

export default StoryDetails;
