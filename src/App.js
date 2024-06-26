import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />


        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
