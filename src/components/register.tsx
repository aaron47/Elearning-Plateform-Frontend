import { useState } from 'react';
import { postRegisterUser } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastOptions } from '../utils/ToastOptions';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			toast.error('Passwords do not match', toastOptions);
			return;
		}

		await postRegisterUser({ email, password })
			.then((_) => navigate('/login'))
			.catch((err) => toast.error(err.message, toastOptions));
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
								htmlFor='email'
							>
								Email
							</label>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								id='email'
								type='email'
								placeholder='Enter your email'
								value={email}
								onChange={(event) => setEmail(event.target.value)}
							/>
						</div>
						<div className='mb-4'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2'
								htmlFor='password'
							>
								Password
							</label>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
								id='password'
								type='password'
								placeholder='Enter your password'
								value={password}
								onChange={(event) => setPassword(event.target.value)}
							/>
						</div>
						<div className='mb-6'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2'
								htmlFor='confirmPassword'
							>
								Confirm Password
							</label>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
								id='confirmPassword'
								type='password'
								placeholder='Confirm your password'
								value={confirmPassword}
								onChange={(event) => setConfirmPassword(event.target.value)}
							/>
						</div>
						<select data-te-select-init>
							<option value='USER'>User</option>
							<option value='TEACHER'>Teacher</option>
						</select>
						<div className='flex items-center justify-center'>
							<button
								className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
								type='submit'
							>
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Register;
