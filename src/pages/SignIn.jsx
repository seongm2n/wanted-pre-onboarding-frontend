import React from 'react';

import SignInForm from '../components/SignInForm';

function SignIn() {
  return (
    <main>
      <div className="flex flex-col px-2 sm:px-0 py-10 items-center w-full text-dm">
        <div className="flex flex-col flex-1 mt-8 sm:mt-14 sm:items-center sm:text-center w-full max-w-sm">
          <h2 className="text-3xl leading-8 text-center sm:px-6 lg:px-8 text-brown">
            로그인 해주세요
          </h2>
          <SignInForm />
        </div>
      </div>
    </main>
  );
}
export default SignIn;
