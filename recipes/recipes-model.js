const db = require('../data/dbConfig.js');

module.exports = {
    getRecipes,
    addRecipe,
}

function getRecipes() {
    return db('recipes')
};

function findById(id) {
    return db('recipes')
    .where({ id })
    .first()
}

function addRecipe(recipe) {
    return db('recipes')
    .insert(recipe, 'id')
    .then(id => {
        return findById(id[0])
    })
}