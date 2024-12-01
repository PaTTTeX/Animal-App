import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing routing components
import Footer from './Components/Footer'; // Import Footer component
import Content from './Components/Content'; // Import Content component for home page
import Add from './Pages/Add'; // Import Add page for adding animals
import View from './Pages/View'; // Import View page for managing animals
import Edit from './Pages/Edit'; // Import Edit page for editing animal details
import NavBar from './Components/NavBar'; // Import NavBar component for navigation

function App() {
  return (
    <div className="d-flex flex-column min-vh-100"> {/* Container for the full app */}
      <Router>
        {/* Render the navigation bar at the top */}
        <NavBar />
        <main className="flex-grow-1"> {/* Main content section */}
          <Routes>
            {/* Define routes for different pages */}
            <Route path="/" element={<Content />} /> {/* Home page route */}
            <Route path="/add" element={<Add />} /> {/* Add animal page route */}
            <Route path="/view" element={<View />} /> {/* View animals page route */}
            <Route path="/edit/:id" element={<Edit />} /> {/* Edit animal page route with dynamic ID */}
          </Routes>
        </main>
        {/* Render footer at the bottom */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
