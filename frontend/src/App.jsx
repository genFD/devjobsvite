import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Search } from './components';
import Home from './pages/Home.jsx';
import Detail from './pages/Detail.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
