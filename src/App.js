
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import SignUp from './Components/Signup/SignUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Banner/>}></Route>
        <Route path='/banner' element={<Banner />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
