const photoDom = () => {
  $('#Photo').html('<img id="photog" src="https://firebasestorage.googleapis.com/v0/b/bailey-248b7.appspot.com/o/me.jpg?alt=media&token=a70a7a73-67d6-4b9e-a78b-3679dd4dea29" alt="me"></img>');
};

const bioDom = () => {
  $('#Bio').html('');
  const domString = `
  <div id="frame">
  <h1>About Me</h1>
  <p>Hi, I'm Bailey. I am an aspiring Software Engineer Living in Nashville, Tennessee.</p>
  <p>I am currently attending the Web Development bootcamp at <a href="http://nashvillesoftwareschool.com/">
  Nashville Software School</a>, evening cohort lucky 13.</p>
  <p>Since early childhood, I have been fascinated by computers. When I was 4, my family 
  gave me a computer they used to have, a dusty old PC running MS-DOS. I was instantly hooked. While my interests over the years have jumped wildly 
  from one field to the next, I have always come back around to programming. In High School I took a class in Visual Basic. During this time I also build my first computer, running Debian Linux.
  At Middle Tennessee State University, where I graduated in 2019, I took classes in Python and C++. 
  And while eventually I would graduate with a degree in Integrated Studies, it was here I solidified my love of programming and decided
  to make moves to pursue that dream.</p>
  `;
  $('#Bio').append(domString);
};

const techDom = () => {
  $('#Tech').html('');
  const domString = `
  <h1>Technologies</h1>
  <div class="iconography">
   <h3 style="color:#44883e"><i class="fab fa-node"></i></h3>
   <h3 style="color:#e34c26"><i class="fab fa-html5"></i></h3>
   <h3 style="color:#c69"><i class="fab fa-sass"></i></h3>
   <h3><i class="fab fa-github-square"></i></h3>
   <h3 style="color:#f7df1e"><i class="fab fa-js"></i></h3>
   <h3 style="color:#cc3534"><i class="fab fa-npm"></i></h3>
   <h3 style="color:#563d7c"><i class="fab fa-bootstrap"></i></h3>
   <h3 style="color:#61dbfb"><i class="fab fa-react"></i></h3>
   <h3><i class="fas fa-terminal"></i></h3>
  </div>
  `;
  $('#Tech').append(domString);
};

const projDom = (item) => {
  const domString = `
    <div class="container-fluid content-row" style="width: 19rem;">
      <div id="proj-card" class="card row" style="width: 18rem; height: 30rem;">
        <img src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.description}</p>
          <div id="btn-area">
            <a href="${item.link}" class="btn btn-dark">Site</a>
            <a href="${item.github}" class="btn btn-dark">Github</a>
          </div>
        </div>
      </div>
  </div>
     `;
  return domString;
};

const footDom = () => {
  const domString = `
  <p>Author: Bailey Dennis</p>
  <p><a href="mailto:bailey.elise.dennis@gmail.com">bailey.elise.dennis@gmail.com</a></p>
  <p><a href="https://github.com/BaileyEDennis">Github</a></p>
  <p><a href="https://www.linkedin.com/in/bailey-dennis-19ba121b4/">LinkedIn</a></p>
  <p><a href="https://twitter.com/TrashInBailsout">Twitter</a></p>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Transgender_Pride_flag.svg/220px-Transgender_Pride_flag.svg.png" id="power"></img>
  `;
  return domString;
};

export default {
  photoDom,
  projDom,
  techDom,
  bioDom,
  footDom
};
