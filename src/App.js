import { useRef } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import {Routes, Route} from 'react-router-dom'
import AboutSection from './components/AboutSection';
import SkillsAbout from './components/SkillsAbout';
 
  


const App = ()=>{
  return (
    <>
      <Header  />

      <Routes>
        <Route path='/main' element={<Main  />}/>
        <Route path='/about' element={<SkillsAbout/>} />
        <Route path='/skills' element={<AboutSection/>} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
