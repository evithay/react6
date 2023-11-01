import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  { id: 1, title: 'Smart Lock System', description: 'A smart lock system is an advanced electronic locking mechanism that leverages technology to provide secure and convenient access control to homes, businesses, and various facilities. It replaces traditional key-and-lock systems with digital alternatives, offering a wide range of features and benefits.'},
  { id: 2, title: 'Design and analysis of Iot - based intelligent robot for real-time monitoring and control', description: 'The design and analysis of an IoT-based intelligent robot for real-time monitoring and control involves creating a robotic system that can perform tasks, collect data, and make decisions with the help of Internet of Things (IoT) technologies. This type of robot can be applied in various scenarios, including industrial automation, smart homes, healthcare, and agriculture, among others.' },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div>
      <section id="projects">
      <h2 className="projects-heading">Projects</h2>
      <p className='projects-p'>Here are some projects that I have worked with..</p>
      <div className="projects-box">
        <div className="projects-navbar">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`project-nav-item ${selectedProject === project ? 'active' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {project.title}
            </div>
          ))}
        </div>
        <div className="project-info">
          {selectedProject && (
            <div className="project-card">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </div>
          )}
        </div>
      </div>
      </section>
    </div>
  );
};
export default Projects;