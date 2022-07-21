const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllItems = () => {
    return knex
    .column('name', 'id')
    .select()
    .from('country')
}

const getItemByID = () => {
    return knex('country')
    .where('id' , id)
    .select('name', 'id')
}

const createItem = (body) => {
    return knex('country')
    .insert(body)
}

const updateItem = (id, body) =>{
    return knex('country')
    .where('id' ,id)
    .update(body)
}

const deleteItem = (id) =>{
    return knex('country')
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