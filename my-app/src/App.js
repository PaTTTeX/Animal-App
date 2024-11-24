import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import Add from './Pages/Add';
import Read from './Pages/Read';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <NavBar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/home" element={<Content />} />
            <Route path="/add" element={<Add/>} />
            <Route path="/read" element={<Read/>} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
