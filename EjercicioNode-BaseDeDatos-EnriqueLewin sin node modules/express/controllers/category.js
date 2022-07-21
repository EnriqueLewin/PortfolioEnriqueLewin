const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllItems = () =>{
    return knex 
    .column('name', 'id')
    .select()
    .from('category')
}

const getItemByID = () => {
    return knex('category')
    .where('id' , id)
    .select('name', 'id')
}

const createItem = (body) => {
    return knex('category')
    .insert(body)
}

const updateItem = (id, body) =>{
    return knex('category')
    .where('id' ,id)
    .update(body)
}

const deleteItem = (id) =>{
    return knex('category')
    .where('id' , id)
    .del()
}

module.exports = {
    getAllItems,
    getItemByID,
    createItem,
    updateItem,
    deleteItem
}