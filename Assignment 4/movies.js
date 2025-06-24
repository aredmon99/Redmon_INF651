let movies = [];

function addMovie() {
  const nameInput = document.getElementById("movie-name").value.trim();

  if (nameInput !== "") {
    movies.push({ name: nameInput });
    document.getElementById("movie-name").value = "";
    renderMovies();
  } else {
    alert("Please enter a movie for your watch list.");
  }
}

function removeMovie(index) {
  movies.splice(index, 1);
  renderMovies();
}

function sortMovies() {
  movies.sort((a, b) => a.name.localeCompare(b.name));
  renderMovies();
}

function renderMovies(movieList = movies) {
  const movieListElement = document.getElementById("movie-list");
  movieListElement .innerHTML = "";

  movieList.forEach((movie, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${movie.name} <button onclick="removeMovie(${index})">Remove</button>`;
    movieListElement.appendChild(li);
  });
}
document.getElementById("add-movie-btn").addEventListener("click", addMovie);
document.getElementById("sort-movies-btn").addEventListener("click", sortMovies);
