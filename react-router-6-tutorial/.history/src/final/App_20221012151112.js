import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './setup/pages/Home';
import About from './setup/pages/About';
import Products from './setup/pages/Products';
import Error from './setup/pages/Error';
import SharedLayout from './setup/pages/SharedLayout';
import SingleProduct from './setup/pages/SingleProduct';
import Dashboard from './setup/pages/Dashboard';
import Login from './setup/pages/Login';
import ProtectedRoute from './setup/pages/ProtectedRoute';
import SharedProductLayout from './setup/pages/SharedProductLayout';
function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path='products' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>

          <Route path='login' element={<Login setUser={setUser}></Login>} />
          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
