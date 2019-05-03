const router = require('express').Router();
const db = require('./recipes-model.js');

// Get all dishes. **Postman Tested: working**
router.get('/', (req, res) => {
    db.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
});

// Post Recipe. **Postman Tested: **
router.post('/', (req, res) => {
    const newRecipe = req.body;
    
    if(!newRecipe.name || !newRecipe.dish_id) {
        res.status(400).json({ message: "Please provide a name and a valid dish ID for this recipe."})
    } else {
        db.addRecipe(newRecipe)
        .then(recipe => {
            res.status(201).json(recipe)
        })
        .catch(err =>  {
            res.status(500).json(err.message)
        })
    }
});


module.exports = router;