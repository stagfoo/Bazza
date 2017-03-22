/*
* Quick and dirty choo wrapper & logic for SortableJS
* @id: string (id of dom element)
* @send: function (choo-send)
*/

const Sortable = require('sortablejs')
const map = require('lodash.map')

const ChooSortable = (id, send) => {

  const target = document.getElementById(id)

  Sortable.create(target, {
    // group: allow only drag and drop between list of type 'marks'
    // could be added to args
    group: 'marks',
    onAdd: (event) => {
      // Get children's data from their data-sortable attribute
      const list = map(event.to.children, child => JSON.parse(child.dataset.sortable))
      // Get id to determine the correct reducer to fire
      const listId = event.to.id
      console.log(listId)
      console.log(list)
      // Fire reducer update<listId>(state, list)
      // send(`update${listId}`, list)
    },
    onUpdate: (event) => {
      // Get children's data from their data-sortable attribute
      const list = map(event.to.children, child => JSON.parse(child.dataset.sortable))
      // Get id to determine the correct reducer to fire
      const listId = event.to.id
      console.log(listId)
      console.log(list)
      // Fire reducer update<listId>(state, list)
      // send(`update${listId}`, list)
    },
    onRemove: (event) => {
      // Get children's data from their data-sortable attribute
      const list = map(event.to.children, child => JSON.parse(child.dataset.sortable))
      // Get id to determine the correct reducer to fire
      const listId = event.to.id
      console.log(listId)
      console.log(list)
      // Fire reducer update<listId>(state, list)
      // send(`update${listId}`, list)
    }
  })
}

module.exports = ChooSortable
