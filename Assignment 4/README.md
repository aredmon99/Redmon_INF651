Movie Watchlist
This is a simple movie watchlist. I used your GitHub code for the HTML and the CSS. I added the sorting button in the HTML so the code would work but other than that its unchanged. Below is the explaination of the code that was used for the JS.

JavaScript
Movies Array: This stores all the movies entered by the user.

addMovie(): This function grabs the movie title from the input field, checks if it’s not empty, adds it to the movies array, and then updates the list displayed on the page.

removeMovie(index): When the "Remove" button is clicked the function deletes the movie.

sortMovies(): This function sorts the movies alphabetically by name when the user clicks the "Sort Movies" button.

renderMovies(): This function takes the updated movies array and updates the list shown on the webpage.

