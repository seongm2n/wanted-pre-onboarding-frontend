import React from 'react';

import SignUpForm from '../components/SignUpForm';

function SignUp() {
  return (
    <main>
      <div className="flex flex-col px-2 sm:px-0 py-10 items-center w-full text-dm">
        <div className="flex flex-col flex-1 mt-8 sm:mt-14 sm:items-center sm:text-center w-full max-w-sm">
          <h2 className="text-3xl leading-8 text-center sm:px-6 lg:px-8 text-brown">
            회원가입 하러 오셨나요? <br/>
            만나서 반가워요✋🏻
          </h2>
          <SignUpForm />
        </div>
      </div>
    </main>
  );
}
export default SignUp;
