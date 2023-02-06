import './App.css';
import {Routes,Route} from 'react-router-dom';
import NavbarC from './Components/NavbarC';
import HomeC from './Components/HomeC';
import Regdet from './Components/Regdet'
import Licdet from './Components/Licdet';
import Perdet from './Components/Perdet';
import Footer from './Components/Footer';
import Newreg from './Components/Newreg';
import Newlic from './Components/Newlic';
import Newper from './Components/Newper';
import About from './Components/About';

function App() {
  return (
    <>
      <NavbarC/>
      <Routes>
      <Route path='/' element={<HomeC/>}></Route>
      <Route path='Regdet' element={<Regdet/>}></Route>
      <Route path='Licdet' element={<Licdet/>}></Route>
      <Route path='Perdet' element={<Perdet/>}></Route>
      <Route path='Newreg' element={<Newreg/>}></Route>
      <Route path='Newlic' element={<Newlic/>}></Route>
      <Route path='Newper' element={<Newper/>}></Route>
      <Route path='About' element={<About/>}></Route>
      </Routes>
      <Footer/>
      

    </>
  );
}

export default App;



// import './App.css';
// import {Routes,Route} from 'react-router-dom';
// import Navbar from './Components/Navbar_a';
// import Footer from './Components/Footer';
// import Home from './Components/Home_a';
// import Regreport from './Components/Regreport';
// import Licreport from './Components/Licreport';
// import Perreport from './Components/Perreport';
// import Regapp from './Components/Regapp';
// import Licapp from './Components/Licapp';
// import Perapp from './Components/Perapp';
// function App() {
//   return (
//     <>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home/>}></Route>
//         <Route path='Regapp' element={<Regapp/>}></Route>
//         <Route path='Licapp' element={<Licapp/>}></Route>
//         <Route path='Perapp' element={<Perapp/>}></Route>
//         <Route path='Regreport' element={<Regreport/>}></Route>
//         <Route path='Licreport' element={<Licreport/>}></Route>
//         <Route path='Perreport' element={<Perreport/>}></Route>

//       </Routes>
//       <Footer/>
//     </>
//   );
// }

// export default App;