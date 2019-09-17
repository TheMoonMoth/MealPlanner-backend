const express = require('express');
const queries = require('./queries');
const bodyParser = require('body-parser');

const app = express();
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

app.post('/ingredients', (req, res) => {
  queries.ingredients.create(req.body).then(ingredient => {
    res.status(200).json({
      message: 'Ingredient Added!',
      ingredient,
    });
  })
    .catch(err => console.warn('Here\'s your problem -->', err));
});

app.delete('/ingredients/:ingredientId', (req, res) => {
  queries.ingredients.delete(req.params.ingredientId).then(ingredientId => {
    res.status(200).json({
      message: 'Ingredient deleted',
      ingredientId,
    });
  })
    .catch(err => console.warn('Problem deleting ingredient.'));
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

// *************************
// *** MARKET END POINTS ***
// *************************

app.get('/markets', (req, res) => {
  queries.markets.list().then(markets => {
    res.json({
      markets
    });
  })
    .catch(err => console.warn('Here\'s your problem -->', err));
});

app.get('/markets/:marketId', (req, res) => {
  queries.markets.read(req.params.recipeId).then(market => {
    res.json({
      market
    });
  })
    .catch(err => console.warn('Here\'s your problem -->', err));
});


// ***********************
// *** SERVER BUSINESS ***
// ***********************

app.listen(PORT, () => console.log(`MealPlanner-backend listening on PORT ${PORT}!`));

module.exports = app;

// *******************
// *** DIRECTORIES ***
// *******************

const wildcards = {
  ingredients: [
    'Treat yo\'self!',
    'You have to buy it sooner or later...',
    'Get that small token for that special person.',
  ],
  recipes: [
    '',
  ],
  markets: [
    'Go healthy! Shop Sprouts',
    'Staples baby! Trader Joe\'s time',
    'Need more than food. Better do King Soopers',
    'Just a couple of high quality items. Whole foods.'
  ]
};
