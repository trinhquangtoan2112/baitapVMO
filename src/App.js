
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Homelayout from './layout/HomeLayout/Homelayout';
import "./sass/style.scss"
function App() {
  return (
    <BrowserRouter>
      <Homelayout></Homelayout>
      <Routes>



      </Routes>
    </BrowserRouter>
  );
}

export default App;
