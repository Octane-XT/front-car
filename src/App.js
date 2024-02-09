import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import MessagePage from './pages/MessagePage';
import CarDetailPage from './pages/CarDetailPage';
import Favorispage from './pages/FavorisPage';

function App() {

  const PrivateRoute = ({ element }) => {
    const token = localStorage.getItem("token");

    if (!token) {
      return <Navigate to="/login" replace />;
    }
    return element;
  };

  return (
    <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/" element={<HomePage/>} />
        <Route
          path="/favoris"
          element={<PrivateRoute element={<Favorispage/>} />}
        />
        <Route
          path="/historique"
          element={<PrivateRoute element={<HistoryPage/>} />}
        />
        <Route path="/detail" element={<CarDetailPage/>} />
        <Route
          path="/message/:productId"
          element={<PrivateRoute element={<MessagePage/>} />}
        />
    </Routes>
  );
}

export default App;
