import { useLocation } from 'react-router-dom';
import { Modal } from './index';

const Create = () => {
	const { state: imageUrl } = useLocation();

	return (
		<>
			{!imageUrl && (
				<Modal>
					<div>Create</div>
				</Modal>
			)}
			{imageUrl && <div>Hey</div>}
		</>
	);
};

export default Create;
