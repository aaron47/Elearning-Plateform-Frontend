import { useState } from 'react';
import { postLoginUser } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastOptions } from '../utils/ToastOptions';
import { useAppDispatch } from '../app/hooks';
import { setCurrentUser } from '../features/user/userSlice';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		await postLoginUser({ email, password })
			.then((res: any) => {
				dispatch(setCurrentUser(res.user));
				navigate('/');
			})
			.catch((_err) => {
				toast.error('Invalid email or password', toastOptions);
			});
	};

	return (
		<div className='min-h-screen'>
			<div className='flex items-center justify-center'>
				<div className='w-full max-w-sm mt-16'>
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
						<div className='mb-6'>
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
						<div className='flex items-center justify-between'>
							<button
								className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
								type='submit'
							>
								Sign In
							</button>
							<a
								className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
								href='#'
							>
								Forgot Password?
							</a>
						</div>
					</form>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Login;
