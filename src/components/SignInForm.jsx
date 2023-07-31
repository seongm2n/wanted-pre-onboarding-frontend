import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../api/auth';
// import { useAuth } from '../context/AuthContext';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // const { signIn } = useAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        alert('이메일과 비밀번호를 입력해주세요!');
        return;
      }
      const res = await signIn({ email, password });
      const userData = res.data;
      console.log(userData);

      if (!userData) {
        alert('아이디와 비밀번호가 맞는지 확인해주세요');
        return;
      }
      navigate(`/todo`);
    } catch (error) {
      console.error('login error', error);
    }
  };
  return (
    <form
      className="flex flex-col flex-1 mt-8 sm:mt-14 sm:items-center sm:text-center w-full max-w-sm"
      onSubmit={handleSignIn}
    >
      <input
        data-testid="email-input"
        className="px-10 py-2 w-full mt-2 focus:outline-none border-b border-wgray-400 sm:text-center rounded"
        text="email"
        required
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        data-testid="password-input"
        className="px-10 py-2 w-full mt-2 focus:outline-none border-b border-wgray-400 sm:text-center rounded"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex flex-row gap-7 flex-1 sm:mt-3 sm:items-center sm:text-center w-full max-w-sm">
        <button
          data-testid="signin-button"
          className=" bg-orange-300 px-8 py-2 w-full mt-2 focus:outline-none border-b border-wgray-400 sm:text-center rounded hover:bg-orange-200"
          type="submit"
        >
          로그인
        </button>
      </div>
    </form>
  );
}
export default SignInForm;
