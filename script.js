function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value
  var trailerFilme = document.getElementById("trailer").value

  if (
    filmeFavorito.endsWith(
      ".jpg" || ".JPG" || ".png" || ".PNG" || ".jpeg" || ".JPEG"
    )
  ) {
    var elementoListaFilmes = document.getElementById("listaFilmes")
    elementoListaFilmes.innerHTML = filmeFavorito =
      elementoListaFilmes.innerHTML +
      "<a href =" +
      trailerFilme +
      " target = _blank>" +
      "<img src=" +
      filmeFavorito +
      ">" +
      "</a>"
  } else {
    alert("Formato de imagem inválido. Por favor, tente outro link.")
  }
  document.getElementById("filme").value = null
  document.getElementById("trailer").value = null
}
