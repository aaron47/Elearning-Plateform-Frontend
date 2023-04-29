import FormationCard from './FormationCard';

const FormationList = () => {
	return (
		<div>
			<h1 className="p-4 text-white text-4xl">Liste de tous les formations: </h1>

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
