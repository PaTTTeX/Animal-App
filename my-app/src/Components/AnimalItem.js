import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AnimalItem = (props) => {
  const { myanimal } = props;

  useEffect(() => {
    console.log("Animal Item Rendered:", myanimal);
  }, [myanimal]);

  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:4000/api/animal/${myanimal._id}`)
      .then(() => {
        props.Reload(); // Refresh the animal list after deletion
      })
      .catch((error) => {
        console.error("Error deleting animal:", error);
      });
  };

  return (
    <div className="mb-2">
      <Card
        style={{
          width: "18rem",
          height: "33rem",
          backgroundColor: "#064635",
          margin: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Card.Header style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
            {myanimal.name}
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <img
                src={myanimal.imageUrl}
                alt={myanimal.name}
                style={{ maxWidth: "100%", height: "100%", borderRadius: "5px" }}
              />
              <footer style={{ textAlign: "left" }}>
                <strong>Species:</strong> {myanimal.species} <br />
                <strong>Life Span:</strong> {myanimal.age} <br />
                <strong>Habitat:</strong> {myanimal.habitat}
              </footer>
            </blockquote>
          </Card.Body>
        </div>
        <div
          style={{
            padding: "10px",
            textAlign: "center",
            borderTop: "1px solid rgb(255, 255, 255)",
          }}
        >
          <Link
            to={`/edit/${myanimal._id}`}
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            Edit
          </Link>
          <Button
            variant="danger"
            style={{ width: "100%", marginTop: "5px" }}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default AnimalItem;
