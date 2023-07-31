import React, { useState } from 'react';
import { signUp } from '../api/auth';
import { emailValidator, passwordValidator } from '../validators/authValidator';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    const isEmailValid = emailValidator(email);
    setIsValidEmail(isEmailValid);

    const isPasswordValid = passwordValidator(password);
    setIsValidPassword(isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      try {
        const res = await signUp({ email, password });
        console.log('회원가입 성공', res);
        const accessToken = localStorage.getItem('access_token');
        console.log('어세스토큰', accessToken);
        navigate(`/signin`);
      } catch (error) {
        console.error('회원가입 실패:', error.message);
      }
    }
  };

  const isButtonDisabled =
    !emailValidator(email) || !passwordValidator(password);
  return (
    <form className="flex flex-col flex-1 mt-8 sm:mt-14 sm:items-center sm:text-center w-full max-w-sm">
      <input
        data-testid="email-input"
        className="px-10 py-2 w-full mt-2 focus:outline-none border-b border-wgray-400 sm:text-center rounded"
        text="email"
        required
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {email !== '' && !emailValidator(email) && (
        <span className="text-red-500">
          @포함한 유효한 이메일 주소를 입력해주세요!{' '}
        </span>
      )}
      <input
        data-testid="password-input"
        className="px-10 py-2 w-full mt-2 focus:outline-none border-b border-wgray-400 sm:text-center rounded"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {password !== '' && !passwordValidator(password) && (
        <span className="text-red-500">
          패스워드는 8자리 이상이여야 합니다.
        </span>
      )}
      <div className="flex flex-row gap-7 flex-1 sm:mt-3 sm:items-center sm:text-center w-full max-w-sm">
        <button
          data-testid="signup-button"
          className=" bg-orange-300 px-8 py-2 w-full mt-2 focus:outline-none border-b border-wgray-400 sm:text-center rounded hover:bg-orange-200"
          onClick={handleSignup}
          disabled={isButtonDisabled}
        >
          회원가입
        </button>
      </div>
    </form>
  );
}
export default SignUpForm;
