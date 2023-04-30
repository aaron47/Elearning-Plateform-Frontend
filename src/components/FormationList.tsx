import { useEffect, useState } from 'react';
import FormationCard from './FormationCard';
import { Formation } from '../utils/types';
import { getFormations } from '../utils/api';

const FormationList = () => {
	const [formations, setFormations] = useState<Formation[]>([]);

	const fetchFormations = async () => {
		await getFormations().then((res) => setFormations(res.data));
	}

	useEffect(() => {
		fetchFormations();
	}, []);

	return (
		<div>
			<h1 className='p-4 text-white text-4xl'>Liste de tous les formations</h1>

			<div className='flex flex-col items-center justify-center'>
				<FormationCard />
				<FormationCard />
				<FormationCard />
				<FormationCard />
			</div>
		</div>
	);
};

export default FormationList;
