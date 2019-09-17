const express = require('express');
const app = express();
const queries = require('./queries');
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Welcome to your personal meal planner helper!'));

// *****************************
// *** INGREDIENT END POINTS ***
// *****************************

app.get('/ingredients', (req, res) => {
  queries.ingredients.list().then(ingredients => {
    res.json({ ingredients });
  })
    .catch(err => console.warn('Here\'s your problem -->', err));
});
  
app.get('/ingredients/:ingredientId', (req, res) => {
  queries.ingredients.read(req.params.ingredientId).then(ingredient => {
    res.json({
      ingredient
    });
  })
    .catch(err => console.warn('Here\'s your problem -->', err));
});

// *************************
// *** RECIPE END POINTS ***
// *************************

app.get('/recipes', (req, res) => {
  queries.recipes.list().then(recipes => {
    res.json({
      recipes
    });
  })
    .catch(err => console.warn('Here\'s your problem -->', err));
});

app.get('/recipes/:recipeId', (req, res) => {
  queries.recipes.read(req.params.recipeId).then(recipe => {
    res.json({
      recipe
    });
  })
    .catch(err => console.warn('Here\'s your problem -->', err));
});


// ***********************
// *** SERVER BUSINESS ***
// ***********************

app.listen(PORT, () => console.log(`MealPlanner-backend listening on PORT ${PORT}!`));

module.exports = app;
