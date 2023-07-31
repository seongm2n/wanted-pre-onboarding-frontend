import { Outlet } from 'react-router-dom';
import Header from './components/Header';
// import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
