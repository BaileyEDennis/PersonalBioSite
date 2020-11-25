// BIO TECHNOLOGIES PROJECTS
const navBarDom = () => {
  $('#navBar').html(`
    <div class="jumbotron">
     <h1>bailey dennis</h1>
     <div class="page-links">
       <a class="nav-link" href="#Bio">bio <span class="sr-only">(current)</span></a>
       <a class="nav-link" href="#Tech">technologies <span class="sr-only">(current)</span></a>
       <a class="nav-link" href="#Projects">projects <span class="sr-only">(current)</span></a>
     </div>
    </div>`);
};

export default { navBarDom };
