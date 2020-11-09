import projectData from './projectData';
import views from '../../components/views/views';

const getProjects = () => {
  $('#Bio').html('<h2>Bio</h2>');
  $('#Tech').html('<h2>Tech</h2>');
  projectData.grabProjects().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#Projects').append(views.projDom(item));
      });
    } else {
      $('#Projects').append('<h1>No Projects</h1>');
    }
  });
};

export default { getProjects };
