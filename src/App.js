
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import SignUp from './Components/Signup/SignUp';
import Lunch from './Components/Foods/Lunch/Lunch';
import Breakfast from './Components/Foods/Breakfast/Breakfast';
import Dinner from './Components/Foods/Dinner/Dinner';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Banner />}>
          <Route path='/breakfast' element={<Breakfast />}></Route>
          <Route path='/lunch' element={<Lunch />}></Route>
          <Route path='/dinner' element={<Dinner />}></Route>
        </Route>

        <Route path='/banner' element={
          <RequireAuth>
            <Banner />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
