import { React } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
	const navigate = useNavigate();
	const accessToken = localStorage.getItem('access_token');

	const handleSignOut = () => {
		localStorage.removeItem('access_token');
		navigate(`/`);
	};
	return (
		<header className='top-0 sticky z-40 w-full bg-orange-300 text-white shadow dark:bg-slate-900 dark:shadow-slate-700 overflow-x-hidden'>
			<nav className='flex items-center justify-between w-full '>
				<div className=' max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-5'>
					<div className='relative h-13 flex items-center'>
						<div className='flex items-center gap-10'>
							<Link to='/'>
								<h1 className='items-center justify-center text-4xl '>Today</h1>
							</Link>
						</div>
					</div>
				</div>
				<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-5'>
					<div className='flex flex-col sm:flex-row gap-2 sm:gap-5 '>
						{!accessToken ? (
							<p
								className='cursor-pointer hover:bg-orange-200 rounded p-1'
								onClick={() => {
									navigate(`/signin`);
								}}
							>
								LOGIN
							</p>
						) : (
							<p
								className='cursor-pointer hover:bg-orange-200 rounded p-1'
								onClick={handleSignOut}
							>
								LOGOUT
							</p>
						)}
						{!accessToken ? (
							<p
								className='cursor-pointer hover:bg-orange-200 rounded p-1'
								onClick={() => {
									navigate(`/signup`);
								}}
							>
								SIGN UP
							</p>
						) : (
							''
						)}
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
