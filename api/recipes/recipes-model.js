function getRecipeById(reciper_id) {
    return Promise.resolve(`awesome recipe with id ${reciper_id}`)
}

module.exports = { getRecipeById }