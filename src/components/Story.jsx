import { Link } from 'react-router-dom';
import Avatar from '../assets/images/avatar.png';
import Image from '../assets/images/image-placeholder.png';
import Menu from '../assets/svgs/btns/menu3.svg';
import Heart from '../assets/svgs/btns/heart.svg';
import Comment from '../assets/svgs/btns/comment.svg';
import Share from '../assets/svgs/btns/share.svg';
import Save from '../assets/svgs/btns/saved.svg';

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
				<div className='story-options'>
					<div className='story-options-left'>
						<img src={Heart} alt='like' />
						<img src={Comment} alt='comment' />
						<img src={Share} alt='share' />
					</div>
					<img src={Save} alt='save' />
				</div>
				{story.likedBy.length > 0 && (
					<Link to='/' className='story-likes'>
						{story.likedBy.length} Likes
					</Link>
				)}

				<div className='story-description'>
					<Link to='/'>{story.by.fullName}</Link>
					<div className='txt'>{story.txt}</div>
				</div>
				{story.comments.length > 0 && (
					<div className='story-comments'>
						<Link to='/'>View all {story.comments.length} comments</Link>
						<textarea type='text' placeholder='Add a comment...' autoComplete='off' />
					</div>
				)}
				<div className='story-time-details'>5 hours ago</div>
			</div>
		</div>
	);
};

export default Story;
