const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllItems = () => {
    return knex
    .column('user_id','book_id' , 'id')
    .select()
    .from('loan')
}

const getItemByID = () => {
    return knex('loan')
    .where('id' , id)
    .select('name', 'id')
}

const createItem = (body) => {
    return knex('loan')
    .insert(body)
}

const updateItem = (id, body) =>{
    return knex('loan')
    .where('id' ,id)
    .update(body)
}

const deleteItem = (id) =>{
    return knex('loan')
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