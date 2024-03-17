// Import necessary hooks and components from React and React Bootstrap
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import projects from './projects.json'; // Make sure the path is correct
import './Gallery.css'; // Assuming this file contains necessary styles

// Gallery component that renders the grid of project flip cards
const Gallery = () => {
  const [modalProject, setModalProject] = useState(null);

  // Function to close the modal
  const handleCloseModal = () => setModalProject(null);

  return (
    <div className="gallery">
      {projects.map(project => (
        <FlipCard key={project.id} project={project} onShowDetails={() => setModalProject(project)} />
      ))}
      <Modal show={!!modalProject} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalProject?.image} alt={modalProject?.title} className="img-fluid" />
          <p className="mt-3">{modalProject?.description}</p>
          <div className="project-links">
            <Button variant="primary" href={modalProject?.deployedLink} target="_blank" className="mr-2">View Deployed</Button>
            <Button variant="secondary" href={modalProject?.githubLink} target="_blank">View on GitHub</Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

// FlipCard component representing each project
const FlipCard = ({ project, onShowDetails }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="flip-card-back">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <button onClick={onShowDetails}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
