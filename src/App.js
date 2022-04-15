
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Banner/>}></Route>
        <Route path='/banner' element={<Banner />}></Route>
      </Routes>
    </div>
  );
}

export default App;
