import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Todo from './pages/Todo';
import Main from './pages/Main';
import { ProtectedRoute } from './routes/ProtectedRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{ index: true, path: '/', element: <Main /> },
			{
				path: '/todo',
				element: (
					<ProtectedRoute>
						<Todo />
					</ProtectedRoute>
				),
			},
			{ path: '/signup', element: <SignUp /> },
			{ path: '/signin', element: <SignIn /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

reportWebVitals();
