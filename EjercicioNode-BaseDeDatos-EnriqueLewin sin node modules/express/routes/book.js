const express = require('express');
const router = express.Router();
const bookQueries = require('../controllers/book')


router.get('/' , async (req, res) => {
    const book = await bookQueries.getAllItems();
    res.json(book)
})

router.get('/:id', async (req, res)=> {
    const id = req.params.id
    const book = await bookQueries.getItemByID(id);
    res.json(book)
})

router.post('/' , async (req, res) => {
    const body = req.body
    const newbook = await bookQueries.createItem(body);
    res.json(newbook)
})

router.put('/id' , async (req, res) => {
    const id = req.params.id
    const body = req.body
    const updatebook = await bookQueries.updateItem(id, body)
    res.json(updatebook)
})

router.delete('/:id' , async (req, res)=>{
    const id = req.params.id
    const deletebook = await bookQueries.deleteItem(id)
    res.json(deletebook)
})

module.exports = router;