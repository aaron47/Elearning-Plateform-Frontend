import { useAppSelector } from './app/hooks';
import FormationList from './components/FormationList';
import { Link } from 'react-router-dom';

function App() {
	const user = useAppSelector((state) => state.user);

	return (
		<>
			{user.email ? <Navbar /> : <VisitorNavbar />}
			<FormationList />
		</>
	);
}

export default App;

export const VisitorNavbar = () => {
	return (
		<nav className='bg-gray-900'>
			<div className='mx-auto px-4 py-3'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center'>
						<span className='text-white ml-2 text-lg font-semibold hover:cursor-pointer'>
							<Link to='/'>E-learning ISGS</Link>
						</span>
					</div>

					<div className='flex items-end'>
						<div className='flex items-center text-white space-x-8'>
							<button>
								<Link to='/login'>Login</Link>
							</button>
							<button>
								<Link to='/register'>Sign Up</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export const Navbar = () => {
	const user = useAppSelector((state) => state.user);

	return (
		<nav className='bg-gray-900'>
			<div className='mx-auto px-4 py-3'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center'>
						<span className='text-white ml-2 text-lg font-semibold hover:cursor-pointer'>
							<Link to='/'>E-learning ISGS</Link>
						</span>
					</div>

					<div className='flex space-x-4 items-end'>
						<p className='text-white'>{user.id} </p>
						{user.type === 'TEACHER' && (
							<Link to='/create-formation'>
								<button className='text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>
									Creer une formation
								</button>
							</Link>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};
