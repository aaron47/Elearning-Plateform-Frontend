import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { toastOptions } from '../utils/ToastOptions';
import { participateUserInFormation } from '../utils/api';
import { Formation, User } from '../utils/types';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FormationCardProps = {
	formation: Formation;
	formationUser: User;
};

const FormationCard: React.FC<FormationCardProps> = ({
	formation,
	formationUser,
}) => {
	const user = useAppSelector((state) => state.user);

	const handleParticipate = async () => {
		await participateUserInFormation({
			user_id: user.id,
			formation_id: formation.id,
		})
			.then((res) => {
				toast.success(res.data.message, toastOptions);
			})
			.catch((err) => {
				toast.error(err.data.message, toastOptions);
			});
	};

	return (
		<div className='w-[500px] flex items-center justify-center text-white my-6'>
			<div className='overflow-hidden shadow-md rounded-lg hover:shadow-xl transition duration-300 ease-in-out'>
				<img
					className='h-56 w-full object-cover'
					src={'https://' + formation.image}
					alt='image'
				/>
				<div className='p-4 bg-slate-200'>
					<h3 className='text-lg font-medium text-gray-900'>
						{formation.name}
					</h3>
					<p className='text-sm font-medium text-gray-700 mt-1'>
						{formation.description}
					</p>
					<p className='text-sm font-medium text-yellow-500 mt-1'>3/5</p>
					<div className='flex space-x-8 '>
						<p className='text-lg font-bold text-gray-900 mt-2'>
							{formation.price} <span className='text-sm italic'>TND</span>
						</p>

						{user.type === 'USER' && (
							<button
								type='button'
								className='mt-1 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
								onClick={handleParticipate}
							>
								Participer
							</button>
						)}

						{(+formationUser.id === user.id && (user.type === "TEACHER")) && (
							<Link
								className='mt-1 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
								to={`/formation/${formation.id}/participants`}
							>
								Voir Participants
							</Link>
						)}
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};
export default FormationCard;
