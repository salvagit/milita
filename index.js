function createNota(title, description, image) {
  // traigo mi template
  var templateHtml = document.querySelector("#NotaTpl").innerHTML;
  // genero un elemento div para contener la nota
  var notaContainer = document.createElement("div");

  notaContainer.className = "nota-container col-sm-4";

  // asigno el html de mi template
  notaContainer.innerHTML = templateHtml;

  notaContainer.querySelector(".title").innerHTML = title;
  notaContainer.querySelector(".image").src = image;
  notaContainer.querySelector(".description").innerHTML = description;

  // agregamos la nota a un elemento ya renderisado.
  document.querySelector(".nota-container").appendChild(notaContainer);
}

createNota(
  "Titulo Dinamico",
  "Descripcion Dinamica",
  "https://i.ytimg.com/vi/n_KrxgXrU4w/maxresdefault.jpg"
);

fetch("http://www.omdbapi.com/?i=tt3896198&apikey=abe47891&s=marvel")
  .then((data) => data.json())
  .then((data) =>
    data.Search.map(({ Title, Year, Poster }) =>
      createNota(Title, Year, Poster)
    )
  );
