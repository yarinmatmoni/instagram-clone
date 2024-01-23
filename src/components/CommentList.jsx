import { Comment } from './index';
import Avatar from '../assets/images/avatar.png';

const CommentList = ({ comments, text, byUser }) => {
	if (comments?.length === 0 || !text || !byUser) return <div>No comments yet.</div>;

	return (
		<div className='comment-list'>
			<div className='story-txt'>
				{/* FIXME: img src --> byUser.imgUrl */}
				<div className='story-txt-user'>
					<img src={Avatar} alt='profile image' />
					<div>{byUser.userName}</div>
				</div>
				{text}
			</div>
			{comments?.map((comment) => (
				<Comment key={comment._id} comment={comment} />
			))}
		</div>
	);
};

export default CommentList;
