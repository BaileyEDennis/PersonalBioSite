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
     <div dark-btn>
     <button id='mode-toggle' class="btn btn-light">Dark Mode</btn>
     </div>
    </div>`);
};

const modeChange = () => {
  $('#mode-toggle').on('click', () => {
    if ($('body').hasClass('dark-mode')) {
      $('body').removeClass('dark-mode');
      $('#mode-toggle').text('Dark Mode');
    } else {
      $('body').addClass('dark-mode');
      $('#mode-toggle').text('Light Mode');
    }
  });
};

export default { navBarDom, modeChange };
