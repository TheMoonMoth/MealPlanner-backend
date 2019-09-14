const express = require('express')
const app = express()
const queries = require("./queries");
const bodyParser = require("body-parser");

const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Welcomd to your personal meal planner helper!'));

app.get('/ingredients', (req, res) => {
  queries.list().then(ingredients => {
    res.json({ ingredients })
  })
  .catch(err => console.warn('Here\'s your problem -->', err))
})

app.listen(PORT, () => console.log(`MealPlanner-backend listening on PORT ${PORT}!`))

module.exports = app
