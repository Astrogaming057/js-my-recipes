const router = require('express').Router()
const recipes = require('../../../data/recipes.json')

router.get('/', (_, response) => {
    const list = recipes.map(({ id, title, image, prepTime, difficulty }) => ({
        id,
        title,
        image,
        prepTime,
        difficulty
    }))
    response.send(list)
})

router.post('/recipe/add', (request, response) => {
    const recipe = {
        ...request.body,
        id: recipes.length + 1
    }
    recipes.push(recipe)
    response.send(recipe)
})

router.get('/recipe/:id', (request, response) => {
    const id = parseInt(request.params.id)
    const recipe = recipes.find(recipe => recipe.id === id)
    response.send(recipe)
})

module.exports = router
