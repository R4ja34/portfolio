import { useState, useEffect } from "react";

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/projects");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const { data } = await response.json();
        // Utiliser la méthode map pour accéder aux attributs de chaque projet
        const projectsData = data.map((project) => ({
          id: project.id,
          title: project.attributes.titre,
          description: project.attributes.content,
          url: project.attributes.urlProject,
          released: project.attributes.released,
          // Ajoute d'autres attributs si nécessaire
        }));

        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  console.log(projects);

  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.url}>Voir le projet</a>
            <p>{project.released}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
