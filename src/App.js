import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { TodoProvider } from './context/TodoContext';

function App() {
	return (
		<TodoProvider>
			<Header />
			<Outlet />
		</TodoProvider>
	);
}

export default App;
