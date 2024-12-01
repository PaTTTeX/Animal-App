import React from 'react';
import { Link } from 'react-router-dom';
import addImage from './../Photos/AddAnimal.png'; 
import viewImage from './../Photos/EditAnimal.png'; 

function Content() {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Welcome to AnimalList!</h1>
      <p className="text-center mb-5">
        AnimalList is an intuitive app designed to help you manage information about animals. You can add, view, and edit animal details easily. Start by selecting an option below!
      </p>

      <div className="row justify-content-center">
        {/* Card 1: Add Animal */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm text-center">
            <div className="card-body py-5">
              <img
                src={addImage}
                alt="Add Animal"
                className="img-fluid mb-3"
                style={{ Height: 'auto', width: '100%' , objectFit: 'cover' }}
              />
              <h5 className="card-title">Add an Animal</h5><br></br>
              <p className="card-text">Easily add new animal information to the system.</p>
              <br></br>
              <Link to="/add" className="btn btn-primary">
                Go to Add Page
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2: Edit Animals */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm text-center">
          <div className="card-body py-5">
              <img
                src={viewImage}
                alt="View Animals"
                className="img-fluid mb-3"
                style={{ Height: 'auto', width: '100%' , objectFit: 'cover' }}
              />
              <h5 className="card-title">Edit Animals</h5><br></br>
              <p className="card-text">Browse and Edit/Delete the list of animals in the database.</p>
              <Link to="/view" className="btn btn-success">
                Go to View Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
