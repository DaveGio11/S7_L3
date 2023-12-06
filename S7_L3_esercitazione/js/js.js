fetch("https://striveschool-api.herokuapp.com/books")
  .then((responseObj) => {
    if (responseObj.ok) {
      return responseObj.json();
    }
  })
  .then((booksObj) => {
    console.log(booksObj);
    booksObj.forEach((book) => {
      const row = document.getElementById("row");
      const card = document.createElement("div");
      const col = document.createElement("div");
      col.classList.add("col-4");
      card.innerHTML = ` 
      <div class="card mb-3" style="height:55rem">
            <img src="${book.img}" class="img-top object-fit-cover rounded-top" style="height:700px" alt="img-book">
          <div class="card-body bg-dark text-warning rounded-bottom">
            <h5 class="card-title">${book.title} title</h5>
            <p class="card-text">${book.price} £</p>
            <button type="submit" id="add" onclick="addMe(event)" class="btn btn-info">Aggiungi al carrello</button>
            <button type="submit" onclick="deleteMe(event)" class="btn btn-danger">Scarta</button>
          </div>
    </div>
    `;

      row.appendChild(col);
      col.appendChild(card);
    });
  })

  .catch((error) => console.log(error));

const deleteMe = function (event) {
  const book = event.target.closest(".card");
  book.parentNode.remove();
};
deleteMe();
