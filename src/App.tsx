import Login from './components/login';
import Register from './components/register';
import CreateFormation from './components/createFormation';
import FormationList from './components/FormationList';
import { Link } from 'react-router-dom';

function App() {
	return (
		<>
			<FormationList />
			<Login />
			<Register />
			<CreateFormation />
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
						<p className='text-white'>aaronborgi1@gmail.com</p>
					</div>
				</div>
			</div>
		</nav>
	);
};
