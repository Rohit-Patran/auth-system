import { Routes ,Route, Navigate } from 'react-router-dom';
import './App.css';
import SignupComponent from './components/Signup';
import Main from './components/Main';
import Logincomponent from './components/Login';

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="text-center">
      <Routes>
        { user && < Route path='/' element={<Main/>}/> }
          <Route path='/signup' element={<SignupComponent />} />
          <Route path='/login' element={<Logincomponent />} />
          <Route path='/' element={<Navigate replace to="/signup" />} />
      </Routes>
    </div>
  );
}

export default App;