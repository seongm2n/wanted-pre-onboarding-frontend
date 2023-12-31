import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../api/auth';
import {
	emailValidator,
	passwordValidator,
} from '../../validators/authValidator';
import AuthButton from '../Button/AuthButton';

function SignInForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSignIn = async (e) => {
		e.preventDefault();

		try {
			const res = await signIn({ email, password });
			const accessToken = res.access_token;

			localStorage.getItem('access_token', accessToken);
			navigate(`/todo`);
		} catch (error) {
			alert('로그인 형식에 맞지 않습니다. ');
		}
	};

	const isButtonDisabled =
		!emailValidator(email) || !passwordValidator(password);
	return (
		<form
			className='flex flex-col flex-1 mt-8 sm:mt-14 sm:items-center sm:text-center w-full max-w-sm'
			onSubmit={handleSignIn}
		>
			<input
				data-testid='email-input'
				className='px-10 py-2 w-full mt-2 focus:outline-none border-b border-wgray-400 sm:text-center rounded'
				text='email'
				required
				placeholder='email'
				value={email}
				autoComplete='email'
				onChange={(e) => setEmail(e.target.value)}
			/>
			{email !== '' && !emailValidator(email) && (
				<span className='text-red-500'>
					@포함한 유효한 이메일 주소를 입력해주세요!{' '}
				</span>
			)}
			<input
				data-testid='password-input'
				className='px-10 py-2 w-full mt-2 focus:outline-none border-b border-wgray-400 sm:text-center rounded'
				type='password'
				placeholder='password'
				value={password}
				autoComplete='current-password'
				onChange={(e) => setPassword(e.target.value)}
			/>
			{password !== '' && !passwordValidator(password) && (
				<span className='text-red-500'>
					패스워드는 8자리 이상이여야 합니다.
				</span>
			)}
			<div className='flex flex-row gap-7 flex-1 sm:mt-3 sm:items-center sm:text-center w-full max-w-sm'>
				<AuthButton
					data-testid='signin-button'
					text={'로그인'}
					type='submit'
					disabled={isButtonDisabled}
				/>
			</div>
		</form>
	);
}
export default SignInForm;
