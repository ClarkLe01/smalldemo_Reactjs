import About from './setup/pages/About';
import Home from './setup/pages/Home';
import Products from './setup/pages/Products';
import Error from './setup/pages/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='products' element={<Products/>} />
          <Route path='about' element={<About/>} />
        </Route>
        
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>);
}

export default App;
