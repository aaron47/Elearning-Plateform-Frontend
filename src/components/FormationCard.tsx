const FormationCard = () => {
	return (
		<div className='w-[500px] flex items-center justify-center h-screen text-white'>
			<div className='overflow-hidden shadow-md rounded-lg hover:shadow-xl transition duration-300 ease-in-out'>
				<img
					className='h-56 w-full object-cover'
					src='https://pbs.twimg.com/profile_images/1645501023593668628/6Lqg1S2X_400x400.png'
					alt='image'
				/>
				<div className='p-4 bg-slate-200'>
					<h3 className='text-lg font-medium text-gray-900'>title</h3>
					<p className='text-sm font-medium text-gray-700 mt-1'>
						By instructor
					</p>
					<p className='text-sm font-medium text-yellow-500 mt-1'>rating/5</p>
					<div className='flex space-x-8 '>
						<p className='text-lg font-bold text-gray-900 mt-2'>
							price <span className='text-sm italic'>TND</span>
						</p>

						<button
							type='button'
							className='mt-1 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
						>
							Participer
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FormationCard;
