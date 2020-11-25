import 'bootstrap';
import nav from './components/navBar';
import pic from './helpers/projectsDone/photograph';
import projects from './helpers/projectsDone/projects';
import technology from './helpers/projectsDone/techKnown';
import biography from './helpers/projectsDone/biography';
import foot from './helpers/projectsDone/foot';
import '../styles/main.scss';

const init = () => {
  nav.navBarDom();
  pic.getPicture();
  projects.getProjects();
  technology.displayTech();
  biography.getBio();
  foot.getFoot();
};

init();
