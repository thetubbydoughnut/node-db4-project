const db = require('../../data/db-config')

async function getRecipeById(reciper_id) {
    const recipeRows = await db('recipes as r')
        .where('recipe_id', reciper_id)
    return recipeRows
}

module.exports = { getRecipeById }