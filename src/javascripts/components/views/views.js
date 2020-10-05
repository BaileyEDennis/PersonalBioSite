const bioDom = () => {
  $('#Bio').html('');
  const domString = `
  <img id="photo" src="/img/me.jpg" alt="me"></img>
  <div id="frame">
  <p>Since childhood, Bailey has been facinated by computers. She began with an old family PC running MS-DOS on an intel 80386. From this humblpe (and frustrating!) beginning bloomed a passion for computing. In highschool she focused on adding programming classes into
  her cirriculum such as Microsoft Visual Basic, and installed Linux (Debian) on the first computer she built.</p> 
  <p>In University she took courses in python and C++ but ultimately majored with a Bachelor of Science in Integrated Studies from MTSU in 2019, after spending some time away to become an EMT. She now focuses on honing her programming skills and pursues a carreer in development.</p>
  </div>
  `;
  $('#Bio').append(domString);
};

const techDom = () => {
  $('#Tech').html('');
  const domString = `
  <h3><i class="fab fa-html5"></i></h3>
  <h3><i class="fab fa-sass"></i></h3>
  <h3><i class="fab fa-github-square"></i></h3>
  <h3><i class="fab fa-js"></i></h3>
  <h3><i class="fab fa-npm"></i></h3>
  <h3><i class="fab fa-bootstrap"></i></h3>
  <h3><i class="fas fa-terminal"></i></h3>
  `;
  $('#Tech').append(domString);
};

const projDom = (list) => {
  const taco = Object.values(list);
  taco.forEach((item) => {
    const domString = `
    <div class="wholeCard" style="width: 19rem;">
      <div class="card" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.description}</p>
          <a href="${item.link}" class="btn btn-primary">See It!</a>
        </div>
      </div>
  </div>
     `;
    $('#Projects').append(domString);
  });
};

export default { projDom, techDom, bioDom };
