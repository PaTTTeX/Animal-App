import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const AnimalItem = (props) => {
  const { myanimal } = props;

  useEffect(() => {
    console.log("Animal Item Rendered:", myanimal);
  }, [myanimal]);

  return (
    <div className="mb-2">
      <Card style={{ width: '18rem', height: '33rem', backgroundColor: '#064635', margin: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div>
          <Card.Header style={{ fontWeight: 'bold', fontSize: '1.4rem' }}>
            {myanimal.name}
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <img
                src={myanimal.imageUrl}
                alt={myanimal.name}
                style={{ maxWidth: "100%", height: "100%", borderRadius: "5px" }}
              />
              <footer style={{ textAlign: 'left' }}>
                <strong>Species:</strong> {myanimal.species} <br />
                <strong>Life Span:</strong> {myanimal.age} <br />
                <strong>Habitat:</strong> {myanimal.habitat}
              </footer>
            </blockquote>
          </Card.Body>
        </div>
        <div style={{ padding: '10px', textAlign: 'center', borderTop: '1px solid rgb(255, 255, 255)' }}>
          <Link
            to={`/edit/${myanimal._id}`}
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            Edit
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default AnimalItem;
