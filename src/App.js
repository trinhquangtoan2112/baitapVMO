
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

        {/* <Routes>
          <Route path="" element={<Homelayout></Homelayout>} >
            <Route path="" element={<HomePage></HomePage>} ></Route>
            <Route path="/reading/*" element={<ReadingPages></ReadingPages>}></Route>
            <Route path="/searching" element={<SearchComponents></SearchComponents>}></Route>
            <Route path="/searching/*" element={<SearchComponents></SearchComponents>}></Route>
            <Route path="/detail" element={<UserPage></UserPage>}></Route>
            <Route path="/content/:section" element={<SectionTypeComponents></SectionTypeComponents>}></Route>
          </Route>


        </Routes> */}
        <AppRoutes></AppRoutes>



      </BrowserRouter>
    </>
  );
}

export default App;
