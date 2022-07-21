const express = require('express');
const router = express.Router();
const categoryQueries = require('../controllers/category')


router.get('/' , async (req, res) => {
    const category = await categoryQueries.getAllItems();
    res.json(category)
})

router.get('/:id', async (req, res)=> {
    const id = req.params.id
    const category = await categoryQueries.getItemByID(id);
    res.json(category)
})

router.post('/' , async (req, res) => {
    const body = req.body
    const newcategory = await categoryQueries.createItem(body);
    res.json(newcategory)
})

router.put('/id' , async (req, res) => {
    const id = req.params.id
    const body = req.body
    const updatecategory = await categoryQueries.updateItem(id, body)
    res.json(updatecategory)
})

router.delete('/:id' , async (req, res)=>{
    const id = req.params.id
    const deletecategory = await categoryQueries.deleteItem(id)
    res.json(deletecategory)
})

module.exports = router;