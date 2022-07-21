const express = require('express');
const router = express.Router();
const userQueries = require('../controllers/user')


router.get('/' , async (req, res) => {
    const user = await userQueries.getAllItems();
    res.json(user)
})

router.get('/:id', async (req, res)=> {
    const id = req.params.id
    const user = await userQueries.getItemByID(id);
    res.json(user)
})

router.post('/' , async (req, res) => {
    const body = req.body
    const newuser = await userQueries.createItem(body);
    res.json(newuser)
})

router.put('/id' , async (req, res) => {
    const id = req.params.id
    const body = req.body
    const updateuser = await userQueries.updateItem(id, body)
    res.json(updateuser)
})

router.delete('/:id' , async (req, res)=>{
    const id = req.params.id
    const deleteuser = await userQueries.deleteItem(id)
    res.json(deleteuser)
})

module.exports = router;