import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home, Error, Register, Detail } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
