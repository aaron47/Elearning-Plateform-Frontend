import { useState } from 'react';
import { CreateFormationDto } from '../utils/types';
import { postCreateFormation } from '../utils/api';
import { useAppSelector } from '../app/hooks';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastOptions } from '../utils/ToastOptions';

const CreateFormation = () => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [duration, setDuration] = useState('');
	const [image, setImage] = useState('');
	const user = useAppSelector((state) => state.user);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const dto: CreateFormationDto = {
			user_id: user.id,
			name,
			description,
			price: +price,
			duration: +duration,
			image,
		};

		await postCreateFormation(dto)
			.then((res) => toast.success(res.data.message, toastOptions))
			.catch((err) => toast.error(err.data.message, toastOptions));
	};

	return (
		<div className='min-h-screen'>
			<div className='flex items-center justify-center'>
				<div className='w-full max-w-md mt-16'>
					<form
						onSubmit={handleSubmit}
						className='bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4'
					>
						<div className='mb-4'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2'
								htmlFor='name'
							>
								Name
							</label>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								id='name'
								type='text'
								placeholder='Enter formation name'
								value={name}
								required
								onChange={(event) => setName(event.target.value)}
							/>
						</div>
						<div className='mb-4'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2'
								htmlFor='description'
							>
								Description
							</label>
							<textarea
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
								id='description'
								placeholder='Enter formation description'
								value={description}
								required
								onChange={(event) => setDescription(event.target.value)}
							/>
						</div>
						<div className='mb-4'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2'
								htmlFor='price'
							>
								Price
							</label>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								id='price'
								type='number'
								placeholder='Enter formation price'
								value={price}
								required
								onChange={(event) => setPrice(event.target.value)}
							/>
						</div>
						<div className='mb-4'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2'
								htmlFor='duration'
							>
								Duration
							</label>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								id='duration'
								type='number'
								placeholder='Enter formation duration in days / hours'
								value={duration}
								onChange={(event) => setDuration(event.target.value)}
								required
							/>
						</div>
						<div className='mb-6'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2'
								htmlFor='image'
							>
								Image
							</label>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								id='image'
								type='text'
								placeholder='Enter image URL'
								value={image}
								onChange={(event) => setImage(event.target.value)}
								required
							/>
						</div>
						<div className='flex items-center justify-between'>
							<button
								className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
								type='submit'
							>
								Create
							</button>
						</div>
					</form>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};
export default CreateFormation;
