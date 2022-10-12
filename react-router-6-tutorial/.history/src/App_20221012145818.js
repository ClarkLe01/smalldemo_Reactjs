import { BrowserRouter, Routes, Route } from 'react-router-dom';
const HomePage = () =>{
  return (
    <div>Homepage</div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>);
}

export default App;
