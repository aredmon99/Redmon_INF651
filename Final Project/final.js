const recipes = [
  { name: "Chicken", ingredients: ["Chicken", "Sweet Potatoes", "Asperugus"], calories: 350 },
  { name: "Beef Stir", ingredients: ["Beef", "Broccoli", "Carrots", "Rice"], calories: 1500 },
  { name: "Meat Omelette", ingredients: ["Eggs", "Spinach", "Peppers", "Ham", "Bacon", "Sausage"], calories: 650 },
  { name: "Veggie Omelette", ingredients: ["Eggs", "Spinach", "Peppers"], calories: 250 },
  { name: "Ramen", ingredients: ["Eggs", "Peppers", "Ramen", "Garlic", "Pork"], calories: 1000 },
  { name: "Veggie Wrap", ingredients: ["Lettuce", "Bacon", "Tomatoes", "Hamburger"], calories: 350 },
  { name: "Soup", ingredients: ["Heavy Cream", "Milk", "Peppers", "Potatoes", "Cheese", "Bacon"], calories: 700 },
  { name: "Veggie Soup", ingredients: ["Veggie Broth", "Mixed Veggies", "Spices"], calories: 130 },
  { name: "Turkey Chili", ingredients: ["Ground Turkey", "Beans", "Tomatoes", "Peppers", "Onion"], calories: 400 },
  { name: "BBQ Chicken", ingredients: ["Chicken", "BBQ Sauce", "Corn", "Spices"], calories: 600 }
];

let plan = [];
let groceries = [];

function welcomeMessage() {
  const now = new Date();
  const hour = now.getHours();
  let text = "Welcome!";
  if (hour < 12) text = "Good morning!";
  else if (hour < 18) text = "Good afternoon!";
  else text = "Good evening!";
  document.getElementById('greeting').innerText = text;
}
welcomeMessage();

function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('visible'));
  document.getElementById(pageId).classList.add('visible');
  
  if (pageId === 'searchPage') showRecipes();
  else if (pageId === 'mealPlanPage') Plan();
  else if (pageId === 'groceryListPage') showGroceries();
}

function showRecipes() {
  const list = document.getElementById('recipeList');
  const search = document.getElementById('searchInput').value.toLowerCase();
  list.innerHTML = '';
  recipes.filter(r => r.name.toLowerCase().includes(search)).forEach(r => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `<strong>${r.name}</strong> - ${r.calories} cal<br>Ingredients: ${r.ingredients.join(', ')}<br>`;
    const btn = document.createElement('button');
    btn.innerText = 'Add';
    btn.onclick = () => addMeal(r);
    card.appendChild(btn);
    list.appendChild(card);
  });
}
document.getElementById('searchInput').addEventListener('input', showRecipes);

function addMeal(recipe) {
  plan.push(recipe);
  alert(`${recipe.name} was added to meal plan!`);
  Plan();
  makeGroceryList();
}

function Plan() {
  const list = document.getElementById('mealPlanList');
  list.innerHTML = '';
  plan.forEach((m, i) => {
    const li = document.createElement('li');
    li.innerHTML = `${m.name} - ${m.calories} cal `;
    const btn = document.createElement('button');
    btn.innerText = 'Remove';
    btn.onclick = () => {
      plan.splice(i, 1);
      Plan();
      makeGroceryList(); 
    };
    li.appendChild(btn);
    list.appendChild(li);
  });
}

function makeGroceryList() {
  groceries = [];
  plan.forEach(m => {
    m.ingredients.forEach(i => {
      if (!groceries.includes(i)) groceries.push(i);
    });
  });
  showGroceries();
}

function showGroceries() {
  const list = document.getElementById('groceryList');
  list.innerHTML = '';
  groceries.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item;
    li.className = 'grocery-item';
    li.onclick = () => li.classList.toggle('checked');
    list.appendChild(li);
  });
}
