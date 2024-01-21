import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { Modal } from './index';
import Cancel from '../assets/svgs/btns/cancel-dark.svg';

const Create = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	const inputRef = useRef(null);
	const { story, onEditStory, onDeleteStory, onShareStory } = useOutletContext();

	const [imageDisplay, setImageDisplay] = useState();
	const [imageUrl, setImageUrl] = useState();

	useEffect(() => {
		if (state) {
			setImageUrl(() => state);
			setImageDisplay(() => URL.createObjectURL(state));
		}
	}, []);

	const uploadImg = (event) => {
		const selectedImage = event.target.files[0];
		setImageUrl(() => selectedImage);
		const selectedImageUrl = URL.createObjectURL(selectedImage);
		setImageDisplay(() => selectedImageUrl);
	};

	const onCancel = () => {
		onDeleteStory();
		navigate(-1);
	};

	return (
		<Modal onDeleteStory={onDeleteStory}>
			<div className='create'>
				<div className='create-header'>
					<img src={Cancel} alt='cancel' onClick={onCancel} />
					<div className='create-header-title'>New Photo Post</div>
					<button type='button' onClick={() => onShareStory(imageUrl)}>
						Share
					</button>
				</div>
				<div className='create-image-container'>
					{imageDisplay && <img src={imageDisplay} alt='post image' />}
					{!imageDisplay && <button onClick={() => inputRef.current.click()}>Select from computer</button>}
					<input type='file' accept='img/*' onChange={uploadImg} ref={inputRef} />
				</div>
				<div className='create-details'>
					<div className='create-details-user'>
						<img src={story.by.imgUrl} alt='user image' />
						<div>{story.by.userName}</div>
					</div>
					<textarea placeholder='Add your description...' name='txt' value={story.txt} onChange={onEditStory} />
				</div>
			</div>
		</Modal>
	);
};

export default Create;
