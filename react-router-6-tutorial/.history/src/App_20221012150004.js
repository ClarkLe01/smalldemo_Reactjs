import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>);
}

export default App;
