import { useEffect, useState } from 'react';
import FormationCard from './FormationCard';
import { Formation, User } from '../utils/types';
import { getFormations } from '../utils/api';
import { useAppSelector } from '../app/hooks';

const FormationList = () => {
	const [formations, setFormations] = useState<Formation[]>([]);
	const user = useAppSelector((state) => state.user);

	const fetchFormations = async () => {
		await getFormations().then((res) => setFormations(res.data.formations));
	};

	useEffect(() => {
		fetchFormations();
	}, []);

	return (
		<div>
			<h1 className='p-4 text-white text-4xl'>Liste de tous les formations</h1>

			<div className='flex flex-col items-center justify-center'>
				{formations.map((formation) => (
					<FormationCard
						key={formation.user_id}
						formation={formation}
						formationUser={user as unknown as User}
					/>
				))}
			</div>
		</div>
	);
};

export default FormationList;
