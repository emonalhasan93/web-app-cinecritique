import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import About from './Pages/About';
import Contact from './Pages/Contact';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/movies' element={<Movies></Movies>}></Route>
  <Route path='/contact' element={<Contact></Contact>}></Route>
  <Route path='/about' element={<About></About>}></Route>
  <Route path='/signup' element={<SignUp></SignUp>}></Route>
  <Route path='/login' element={<Login></Login>}></Route>
</Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
