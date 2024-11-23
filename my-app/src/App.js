import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<h1>Read Component</h1>} />
        <Route path="/create" element={<h1>Create Component</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;