const express = require('express');
const router = express.Router();
const countryQueries = require('../controllers/country')


router.get('/' , async (req, res) => {
    const country = await countryQueries.getAllItems();
    res.json(country)
})

router.get('/:id', async (req, res)=> {
    const id = req.params.id
    const country = await countryQueries.getItemByID(id);
    res.json(country)
})

router.post('/' , async (req, res) => {
    const body = req.body
    const newCountry = await countryQueries.createItem(body);
    res.json(newCountry)
})

router.put('/id' , async (req, res) => {
    const id = req.params.id
    const body = req.body
    const updateCountry = await countryQueries.updateItem(id, body)
    res.json(updateCountry)
})

router.delete('/:id' , async (req, res)=>{
    const id = req.params.id
    const deleteCountry = await countryQueries.deleteItem(id)
    res.json(deleteCountry)
})

module.exports = router;