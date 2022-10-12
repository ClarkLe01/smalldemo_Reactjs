import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';
import Error from './pages/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>);
}

export default App;
