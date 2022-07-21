const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllItems = () =>{
    return knex 
    .column('name', 'id', 'category_id')
    .select()
    .from('book')
}

const getItemByID = () => {
    return knex('book')
    .where('id' , id)
    .select('name', 'id')
}

const createItem = (body) => {
    return knex('book')
    .insert(body)
}

const updateItem = (id, body) =>{
    return knex('book')
    .where('id' ,id)
    .update(body)
}

const deleteItem = (id) =>{
    return knex('book')
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