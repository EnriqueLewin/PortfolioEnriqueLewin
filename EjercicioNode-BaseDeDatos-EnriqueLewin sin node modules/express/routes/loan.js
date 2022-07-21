const express = require('express');
const router = express.Router();
const loanQueries = require('../controllers/loan')


router.get('/' , async (req, res) => {
    const loan = await loanQueries.getAllItems();
    res.json(loan)
})

router.get('/:id', async (req, res)=> {
    const id = req.params.id
    const loan = await loanQueries.getItemByID(id);
    res.json(loan)
})

router.post('/' , async (req, res) => {
    const body = req.body
    const newloan = await loanQueries.createItem(body);
    res.json(newloan)
})

router.put('/id' , async (req, res) => {
    const id = req.params.id
    const body = req.body
    const updateloan = await loanQueries.updateItem(id, body)
    res.json(updateloan)
})

router.delete('/:id' , async (req, res)=>{
    const id = req.params.id
    const deleteloan = await loanQueries.deleteItem(id)
    res.json(deleteloan)
})

module.exports = router;