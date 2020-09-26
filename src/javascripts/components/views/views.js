// I have a list of objects of projects. I take each one and append it as a card to the DOM

const projDom = (list) => {
  list.forEach((item) => {
    console.warn(item);
    const domString = `<div id="container">
    <div class="card" style="width: 18rem;">
     <img src="${item.image}" class="card-img-top" alt="...">
      <div class="card-body">
      <p class="card-text">${item.description}</p>
      </div>
    </div>
</div>`;
    $('#Projects').append(domString);
  });
};

export default { projDom };
