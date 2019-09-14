const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Welcomd to your personal meal planner helper!'))

app.listen(port, () => console.log(`MealPlanner-backend listening on port ${port}!`))