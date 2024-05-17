
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homelayout from './layout/HomeLayout/Homelayout';
import "./sass/style.scss"
import HomePage from './pages/HomePages/HomePage';
import ReadingPages from './pages/ReadingPages/ReadingPages';
import SectionTypeComponents from './compoment/ContentCompoment/SectionTypeComponents';
import SignInSignUpLayout from './layout/SignInSignUpLayout/SignInSignUpLayout';
function App() {
  return (
    <>
      <SignInSignUpLayout />
      <BrowserRouter>

        <Routes>
          <Route path="" element={<Homelayout></Homelayout>} >
            <Route path="" element={<HomePage></HomePage>} ></Route>
            <Route path="/reading/*" element={<ReadingPages></ReadingPages>}></Route>
            <Route path="/content/:section" element={<SectionTypeComponents></SectionTypeComponents>}></Route>
          </Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
