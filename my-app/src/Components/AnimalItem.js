import { useEffect } from "react";
import Card from "react-bootstrap/Card";

const AnimalItem = (props) => {
  const { myanimal } = props;

  useEffect(() => {
    console.log("Animal Item Rendered:", myanimal);
  }, [myanimal]);

  return (
    <div className="mb-2">
      <Card style={{ width: '18rem', height: '30rem', backgroundColor: '#064635', margin: '5px'}}>
        <Card.Header style={{fontWeight: 'bold', fontSize: '1.4rem'}}>{myanimal.name}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img
              src={myanimal.imageUrl}
              alt={myanimal.name}
              style={{ maxWidth: "100%", height: "100%", borderRadius: "5px" }}
            />
            <footer  style={{textAlign: 'left'}}>
              <strong>Species:</strong> {myanimal.species} <br />
              <strong>Life Span:</strong> {myanimal.age} <br />
              <strong>Habitat:</strong> {myanimal.habitat}
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AnimalItem;
