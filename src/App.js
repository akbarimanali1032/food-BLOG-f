import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './componet/Navbar';
import Dashboard from './componet/Dashboard';
import Addblog from './componet/Addblog';
import Blog from './componet/Blog';
import About from './componet/About';
import List from './componet/tabel/List';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Dashboard /> } />
        <Route path='/addblog' element={ <Addblog /> } />
        <Route path='/blog' element={ <Blog /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/list' element={ <List /> } />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
