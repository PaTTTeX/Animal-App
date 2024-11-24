import AnimalItem from "./AnimalItem";

const Animals = (props) => {
    const { myAnimals } = props;
  
    if (!myAnimals.length) {
      return <p>No animals to display.</p>;
    }
  
    return (
      <div className="animal-list">
        {myAnimals.map((animal) => (
          <AnimalItem myanimal={animal} key={animal._id} />
        ))}
      </div>
    );
  };
  
  export default Animals;
  