import proj from '../../components/views/views';
import projects from '../proj.json';

const getProjects = () => {
  $('#Bio').html('<h2>Bio</h2>');
  $('#Tech').html('<h2>Tech</h2>');
  proj.projDom(projects);
};

export default { getProjects };
