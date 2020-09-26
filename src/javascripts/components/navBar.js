// BIO TECHNOLOGIES PROJECTS
const navBarDom = () => {
  $('#navBar').html(
    `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><img src="../img/Logo.png" alt="logo" id="logoPng"></img></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle nav">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#Bio">Bio <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#Tech">Technologies <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#Projects">Projects <span class="sr-only">(current)</span></a>
        </li>
      </ul>
    </div>
  </nav>`
  );
};

export default { navBarDom };
