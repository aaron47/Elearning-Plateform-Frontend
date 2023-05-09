import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { deleteParticipant, getFormationParticipants } from '../utils/api';
import { User } from '../utils/types';

const ManageParticipants = () => {
	let { formationId } = useParams<{ formationId: string }>();

	const [participants, setParticipants] = useState<User[]>([]);

	const getParticipants = async () => {
		await getFormationParticipants(formationId!).then((res) =>
			setParticipants(res.data.participants),
		);
	};

	const deleteParticipantById = async (participantId: string) => {
		participants.filter((participant) => participant.id !== participantId);
		await deleteParticipant(participantId);
	};

	useEffect(() => {
		getParticipants();
	}, []);

	return participants.map((participant) => (
		<div
			key={participant.id}
			className='my-10 flex flex-col items-center justify-center'
		>
			<div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
				<p className='my-2 text-white'>{participant.email}</p>
				<button
					type='button'
					className='text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
					onClick={() => deleteParticipantById(participant.id)}
				>
					Effacer Participant
				</button>
			</div>
		</div>
	));
};

export default ManageParticipants;
