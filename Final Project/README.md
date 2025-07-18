Meal Planner & Grocery List
This is a Meal Planner and Grocery List Generator built using HTML, CSS, and JavaScript.

I used updated and manipulated HTML and CSS fromprior projects for visablity and function. The JavaScript code was created from scratch to practice DOM manipulation, event handling, and using arrays/objects. Below is an explanation of the JavaScript used.

JavaScript
Recipes Array:
Stores all the available recipes, each with its name, ingredients, and calories.

welcomeMessage():
Displays a greeting (“Good morning”, “Good afternoon”, or “Good evening”) based on the current time at the top of the page.

navigateTo(pageId):
Shows the requested page (Home, Search, Meal Plan, or Grocery List) while hiding the others.

showRecipes():
Filters and displays recipes based on the user’s search input, allowing the user to browse recipes easily.

addMeal(recipe):
Adds the selected recipe to the meal plan and updates the Meal Plan page with the added meals.

Plan():
Displays the current meal plan, showing all added meals with their calories and a “Remove” button to delete a meal from the plan.

makeGroceryList():
Generates a grocery list based on all the ingredients in the meal plan.

showGroceries():
Displays the grocery list on the Grocery List page and allows the user to click on each item to mark it as “checked” when purchased.