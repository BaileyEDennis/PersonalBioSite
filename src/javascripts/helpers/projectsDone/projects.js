import projectData from './projectData';
import views from '../../components/views/views';

const getProjects = () => {
  $('#Projects').html('<h1>Projects</h1><div id="proj-area"></div>');
  projectData.grabProjects().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#proj-area').append(views.projDom(item));
      });
    } else {
      $('#proj-area').append('<h1>No Projects</h1>');
    }
  });
};

export default { getProjects };
