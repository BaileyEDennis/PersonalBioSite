import 'bootstrap';
import nav from './components/navBar';
import projects from './helpers/projectsDone/projects';
import technology from './helpers/projectsDone/techKnown';
import biography from './helpers/projectsDone/biography';
import '../styles/main.scss';

const init = () => {
  nav.navBarDom();
  projects.getProjects();
  technology.displayTech();
  biography.getBio();
};

init();
