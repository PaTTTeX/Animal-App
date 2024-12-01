import AnimalItem from "./AnimalItem"; // Import AnimalItem component

const Animals = (props) => {
  const { myAnimals, ReloadData } = props; // Destructure props

  if (!myAnimals.length) { // Check if there are no animals
    return <p>No animals to display.</p>; // Display message if no animals
  }

  return (
    <div className="animal-list"> 
      {myAnimals.map((animal) => ( // Loop through animals
        <AnimalItem myanimal={animal} key={animal._id} Reload={ReloadData} /> // Display each animal
      ))}
    </div>
  );
};

export default Animals; // Export Animals component
