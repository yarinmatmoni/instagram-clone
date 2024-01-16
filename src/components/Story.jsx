import Avatar from '../assets/images/avatar.png';
import Image from '../assets/images/image-placeholder.png';
import Menu from '../assets/svgs/btns/menu3.svg';

const Story = ({ story }) => {
	return (
		<div className='story'>
			<div className='story-user-info'>
				<img src={Avatar} alt='user image' />
				<div className='story-userName'>{story.by.fullName}</div>
				<img src={Menu} alt='menu' className='menu' />
			</div>
			<div className='story-image'>
				<img src={Image} alt='story image' />
			</div>
			<div className='story-details'>
				<div className='story-likes'>likes</div>
				<div className='story-comments'>comments</div>
			</div>
		</div>
	);
};

export default Story;
