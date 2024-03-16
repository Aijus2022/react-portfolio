// Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import projects from './projects.json';
import { Carousel, Card } from 'react-bootstrap';

function Projects() {
  return (
    <Carousel>
      {projects.map((project, index) => (
        <Carousel.Item key={index}>
          <Link to={`/project/${project.id}`} style={{ textDecoration: 'none' }}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={project.img} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Projects;
