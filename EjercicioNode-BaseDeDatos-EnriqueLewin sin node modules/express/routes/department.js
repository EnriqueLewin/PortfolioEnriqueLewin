
const express = require('express');
const departmentQueries = require('../controllers/department')
const router = express.Router();

router.get('/', async (req, res) => {
    const department = await departmentQueries.getAllItems();
    res.json(department);
    
});

router.get('/:id' , async (req, res) => {
    const id = req.params.id
    const department = await departmentQueries.getItemById();
    res.json(department)

});

router.post('/' , async (req, res) => {
    const body = req.body
    const newDepartment = await departmentQueries.createItem(body);
    res.json(newDepartment)
});

router.put('/:id', async (req, res)=> {
    const id = req.params.id;
    const body = req.body;
    const updateDepartment = await departmentQueries.updateItem(id,body)
    res.json(updateDepartment)
})

router.delete('/:id' , async (req, res) => {
    const id = req.params.id;
    const deleteDepartment = await departmentQueries.deleteItem(id)
    res.json(deleteDepartment)
})

module.exports = router;
