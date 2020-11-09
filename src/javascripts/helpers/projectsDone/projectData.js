import axios from 'axios';

const grabProjects = () => new Promise((resolve, reject) => {
  axios
    .get('https://bailey-248b7.firebaseio.com/data.json')
    .then((response) => {
      const projectData = response.data;
      const projects = [];
      if (projectData) {
        Object.keys(projectData).forEach((projectId) => {
          projects.push(projectData[projectId]);
        });
      }
      resolve(projects);
    })
    .catch((error) => reject(error));
});

export default { grabProjects };
