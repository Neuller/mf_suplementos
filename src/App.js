import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/pages/Inicio';
import Produtos from './components/pages/Produtos';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/produtos" element={<Produtos />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
