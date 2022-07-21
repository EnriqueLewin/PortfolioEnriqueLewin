const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllItems = () => {
    return knex
    .column('name', 'id')
    .select()
    .from('department')
}

const getItemById = (id) => {
    return knex('department')
    .where('id' , id)
    .select('name', 'id')
}

const createItem = (body) => {
    return knex('department')
    .insert(body)
}
const updateItem = (id, body) =>{
    return knex('department')
    .where('id' ,id)
    .update(body)
}

const deleteItem = (id) =>{
    return knex('department')
    .where('id' , id)
    .del()
}

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
}