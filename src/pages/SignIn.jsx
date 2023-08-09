import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SignInForm from '../components/Auth/SignInForm';

function SignIn() {
	const navigate = useNavigate();
	const accessToken = localStorage.getItem('access_token');

	useEffect(() => {
		if (accessToken) {
			navigate(`/todo`);
		}
	}, [accessToken, navigate]);
	return (
		<main>
			<div className='flex flex-col px-2 sm:px-0 py-10 items-center w-full text-dm'>
				<div className='flex flex-col flex-1 mt-8 sm:mt-14 sm:items-center sm:text-center w-full max-w-sm'>
					<h2 className='text-3xl leading-8 text-center sm:px-6 lg:px-8 text-text'>
						로그인 해주세요
					</h2>
					<SignInForm />
				</div>
			</div>
		</main>
	);
}
export default SignIn;
