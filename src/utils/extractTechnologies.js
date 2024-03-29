
export const extractTechnologies = (repository) => {
    const { description, primaryLanguage } = repository;
    const technologiesList = [
      'Node.js',
      'React',
      'Vue.js',
      'Express.js',
      'ASP.NET',
      'Spring Boot',
      'Java',
      'Python',
      'JavaScript',
      'TypeScript',
      'C#',
      'Scala',
      'GraphQL',
      'MongoDB',
      'MySQL',
      'PostgreSQL',
      'Elasticsearch',
      'AWS',
      'Azure',
      'Google Cloud Platform',
      'Serverless',
      'Microservices',
      'RESTful API',
      'GraphQL API',
      'CI/CD',
      'Test Automation',
      'Scrum',
      'DevOps',
      'Axios',
      'Next.js',
      'Three.js',
      'Particles.js',
      'React Native',
      'Flutter',
      'Ionic',
      'Electron',
      'TensorFlow',
      'PyTorch',
      'Unity',
      'Symfony',
      'ASP.NET Core',
      'Flask',
      'Redux',
      'Jupyter',
      'Styled Components'
    ];
  
    const technologies = [];

    primaryLanguage && technologies.push(primaryLanguage.name);

    technologiesList.forEach((technology) => {
      if (description.includes(technology)) {
        technologies.push(technology);
      }
    });
  
    return technologies;
  };


  
