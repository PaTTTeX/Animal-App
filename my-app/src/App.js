import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import Add from './Pages/Add';
import View from './Pages/View';
import Edit from './Pages/Edit';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <NavBar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/add" element={<Add />} />
            <Route path="/view" element={<View />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
