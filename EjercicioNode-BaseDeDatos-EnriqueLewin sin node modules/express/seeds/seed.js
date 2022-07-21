/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('loan').del()
  await knex('book').del()
  await knex('user').del()
  await knex('category').del()
  await knex('department').del()
  await knex('country').del()
  //add countries
  await knex('country').insert([
    {id: 1, name: 'Rumania'},
    {id: 2, name: 'Republica_Checa'},
    {id: 3, name: 'Suiza'}
  ]);
  //add departments
  await knex('department').insert([
    {id: 1, name: 'HHRR'},
    {id: 2, name: 'Development'},
    {id: 3, name: 'Marketing'}
  ]);
  //add categories
  await knex('category').insert([
    {id: 1, name: 'Drama'},
    {id: 2, name: 'Comedia'},
    {id: 3, name: 'Thriller'}
  ]);
  //add users
  await knex('user').insert([
    {id: 1, first_name: 'Camilo', last_name: 'Gonzalez', country_id: 2, department_id:1 },
    {id: 2, first_name: 'Elba', last_name:'Lazo',country_id: 1, department_id:2 },
    {id: 3, first_name: 'Rodrigo', last_name:'Rodriguez', country_id:3, department_id:3}
  ]);
  //add books
  await knex('book').insert([
    {id: 1, name: 'Preguntale_al_Polvo', category_id: 1},
    {id: 2, name: 'Bar_del_Infierno', category_id: 2},
    {id: 3, name: 'Recuerdos_que_mienten_un_poco', category_id: 3}
  ]);
  //add loans
  await knex('loan').insert([
    {id: 1, user_id: 1 , book_id:2, date: '2022/4/15'},
    {id: 2, user_id: 2 , book_id:3, date: '2022/6/18'},
    {id: 3, user_id: 3 , book_id:1, date: '2022/8/25'}
  ]);
};

