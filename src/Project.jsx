// Project.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './projects.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function Project() {
  const { projectId } = useParams();
  const project = projects.find(project => project.id.toString() === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card mt-5">
            <img src={project.img} className="card-img-top" alt={project.title} />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <a href={project.deployedLink} className="btn btn-primary mr-2">View Demo</a>
              <a href={project.githubLink} className="btn btn-secondary">GitHub Repository</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
