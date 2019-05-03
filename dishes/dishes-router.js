const router = require('express').Router();
const db = require('./dishes-model.js');

// Get all dishes. **Postman Tested: working**
router.get('/', (req, res) => {
    db.getDishes()
    .then(dishes => {
        res.status(200).json(dishes)
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
});

// Get dish with specified ID, include a list of related recipes. **Postman Tested: working**
router.get('/:id/recipes', (req, res) => {
    const id = req.params.id;

    db.getDish(id)
    .then(dish => {
        if(dish) {
            res.status(200).json(dish)
        } else {
            res.status(404).json({ message: 'The specified dish does not exist.'})
        }
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
});

// Post Dish. **Postman Tested: working** Now returns newly created object.
router.post('/', (req, res) => {
    const newDish = req.body;

    if(!newDish.name) {
        res.status(400).json({ message: 'Please provide a name for the new dish.'})
    } else {
        db.addDish(newDish)
        .then(dish => {
            res.status(201).json(dish)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
    }
});


module.exports = router;