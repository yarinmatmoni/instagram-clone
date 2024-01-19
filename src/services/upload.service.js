const uploadImg = async (event) => {
	const CLOUD_NAME = 'djgbpxsea';
	const UPLOAD_PRESET = 'ml_default_yarin';
	const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

	try {
		const formData = new FormData();
		formData.append('upload_preset', UPLOAD_PRESET);
		formData.append('file', event.target.files[0]);

		const res = await fetch(UPLOAD_URL, {
			method: 'POST',
			body: formData,
		});

		const imgUrl = await res.json();
		return imgUrl;
	} catch (err) {
		console.error('Failed to upload', err);
		throw err;
	}
};

export const uploadService = { uploadImg };
