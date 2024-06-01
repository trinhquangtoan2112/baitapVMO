
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homelayout from './layout/HomeLayout/Homelayout';
import "./sass/style.scss"
import HomePage from './pages/HomePages/HomePage';
import ReadingPages from './pages/ReadingPages/ReadingPages';
import SectionTypeComponents from './compoment/ContentCompoment/SectionTypeComponents';
import SignInSignUpLayout from './layout/SignInSignUpLayout/SignInSignUpLayout';
import DetailComponents from './compoment/ContentCompoment/DetailComponents';
import LoadingComponent from './compoment/LoadingComponents/LoadingComponent';
import UserPage from './pages/UserPage/UserPage';
import SearchComponents from './compoment/ContentCompoment/SearchComponents';
import AppRoutes from './routes/RoutesIndex';
function App() {
  return (
    <>
      <LoadingComponent></LoadingComponent>
      <SignInSignUpLayout />
      <BrowserRouter>


        <AppRoutes></AppRoutes>



      </BrowserRouter>
    </>
  );
}

export default App;
