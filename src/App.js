import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './components/NavBar';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';
import Dashboard from './pages/Dashboard';
//Punto de entrada donde se renderizan todas las vistas y componentes.


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/usuarios' element={<Navigate to="users" />} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='/dashboard/*' element={<Dashboard />}>
          <Route path='welcome' element={<p>Welcome!!</p>} />
          <Route path='goodbye' element={<p>GoodBye!!</p>} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
