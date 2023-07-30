import { React } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <header className="top-0 sticky z-40 w-full bg-orange-300 text-white shadow dark:bg-slate-900 dark:shadow-slate-700">
      <nav className="flex items-center justify-between w-full ">
        <div className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-5">
          <div className="relative h-16 flex items-center">
            <div className="flex items-center gap-10">
              <Link to="/">
                <h1 className="items-center justify-center text-4xl ">To Do</h1>
              </Link>
            </div>
          </div>
        </div>
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-row gap-6 ">
            <p
              className="cursor-pointer"
              onClick={() => {
                navigate(`/signIn`);
              }}
            >
              SignIn
            </p>
            <p
              className="cursor-pointer"
              onClick={() => {
                navigate(`/signUp`);
              }}
            >
              SignUp
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
