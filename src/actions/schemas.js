const { schema } = require('normalizr');

const todo = new schema.Entity('todos')

export const list = new schema.Entity('lists', {
  todos: [ todo ]
})

export const lists = [ list ];
