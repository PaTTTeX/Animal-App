import axios from "axios"; // Axios for making HTTP requests
import Card from "react-bootstrap/Card"; // Bootstrap Card component
import Button from "react-bootstrap/Button"; // Bootstrap Button component
import { Link } from "react-router-dom"; // Link component for navigation
import { useEffect } from "react"; // React hook for side effects

const AnimalItem = (props) => {
  const { myanimal } = props; // Destructure animal data from props

  // Log the animal data whenever it changes
  useEffect(() => {
    console.log("Animal Item Rendered:", myanimal);
  }, [myanimal]); // Dependency array to rerun effect when `myanimal` changes

  // Handle animal deletion
  const handleDelete = (e) => {
    e.preventDefault(); // Prevent default form submission
    axios.delete(`http://localhost:4000/api/animals/${myanimal._id}`) // Delete animal by ID
        .then(() => {
            props.Reload(); // Reload the list after deletion
        })
        .catch((error) => {
            console.error("Error deleting animal:", error); // Log errors
        });
  };

  return (
    <div className="mb-2">
      <Card // Card with styles
        style={{
          width: "25rem", 
          height: "40rem", 
          backgroundColor: "white",
          margin: "5px", 
          display: "flex", 
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Card.Header style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
            {myanimal.name} {/* Animal name */}
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <img
                src={myanimal.imageUrl} // Animal image
                alt={myanimal.name} // Alt text for the image
                style={{ maxWidth: "100%", height: '18.4rem', borderRadius: "5px" }} // Image styles
              />
              <div style={{ textAlign: "left" }}>
                <strong>Species:</strong> {myanimal.species} <br />
                <strong>Life Span:</strong> {myanimal.age} <br />
                <strong>Habitat:</strong> {myanimal.habitat} 
              </div>
            </blockquote>
          </Card.Body>
        </div>
        <div
          style={{
            padding: "10px", 
            textAlign: "center",
            borderTop: "2px solid rgb(0, 0, 0)",
          }}
        >
          <Link
            to={`/edit/${myanimal._id}`} // Link to the edit page for the specific animal
            className="btn btn-primary" // Bootstrap button style
            style={{ width: "100%" }} // Full-width button
          >
            Edit
          </Link>
          <Button
            variant="danger" // Danger button for delete action
            style={{ width: "100%", marginTop: "5px" }} // Full-width and top margin
            onClick={handleDelete} // Trigger handleDelete on click
          >
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default AnimalItem; // Export the AnimalItem component
