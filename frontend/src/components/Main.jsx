import '../App.css';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className="">
			<nav className="bg-pink-600 flex flex-row justify-between gap-x-2 items-center py-4 px-2">
				<h1 className='text-white font-bold'>Dashboard</h1>
				<button className="bg-blue-700 text-white py-2 px-4 rounded-md" onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<h1 class="text-center font-bold text-2xl pt-2">Welcome to Dashboard</h1>
		</div>
	);
};

export default Main;