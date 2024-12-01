import React from 'react';
import { Link } from 'react-router-dom';
import addImage from './../Photos/AddAnimal.png'; 
import viewImage from './../Photos/EditAnimal.png'; 

function Content() {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Welcome to AnimalList!</h1>
      <h3 className="text-center mb-5">
        AnimalList is an intuitive app designed to help you manage information about animals. You can add, view, and edit animal details easily. Start by selecting an option below!
      </h3>

      <div className="row justify-content-center">
        {/* Card for adding an animal */}
        <div className="col-md-4 mb-4 d-flex">
          <div className="card shadow-sm text-center flex-fill">
            <div className="card-body d-flex flex-column py-2">
              <img
                src={addImage}
                alt="Add Animal"
                className="img-fluid mb-3"
                style={{ height: 'auto', width: '100%', objectFit: 'cover' }}
              />
              <h5 className="card-title">Add an Animal</h5><br />
              <p className="card-text">Easily add new animal information to the system.</p>
              <div className="mt-auto"> {/* Button at the bottom of the card */}
                <Link to="/add" className="btn btn-primary">
                  Go to Add Page
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Card for editing animals */}
        <div className="col-md-4 mb-4 d-flex">
          <div className="card shadow-sm text-center flex-fill">
            <div className="card-body d-flex flex-column py-2">
              <img
                src={viewImage}
                alt="Edit Animals"
                className="img-fluid mb-3"
                style={{ height: 'auto', width: '100%', objectFit: 'cover' }}
              />
              <h5 className="card-title">Edit Animals</h5><br />
              <p className="card-text">Browse and Edit/Delete the list of animals in the database.</p>
              <div className="mt-auto"> {/* Button at the bottom of the card */}
                <Link to="/view" className="btn btn-success">
                  Go to View Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
