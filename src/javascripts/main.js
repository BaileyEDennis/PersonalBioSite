import 'bootstrap';
import nav from './components/navBar';
import projects from './helpers/projectsDone/projects';
import '../styles/main.scss';

const init = () => {
  nav.navBarDom();
  projects.getProjects();
};

init();
