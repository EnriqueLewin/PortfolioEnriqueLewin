const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllItems = () => {
    return knex
    .column('first_name', 'last_name', 'id', 'country_id', 'department_id')
    .select()
    .from('user')
}

const getItemByID = () => {
    return knex('user')
    .where('id' , id)
    .select('name', 'id')
}

const createItem = (body) => {
    return knex('user')
    .insert(body)
}

const updateItem = (id, body) =>{
    return knex('user')
    .where('id' ,id)
    .update(body)
}

const deleteItem = (id) =>{
    return knex('user')
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