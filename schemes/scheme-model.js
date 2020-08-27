const db = require("../data/config")

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
}

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes")
    .where("id", id)
    .first()
}

function findSteps(schemeId) {
    return db('steps as s')
    .join('schemes as sc', 'sc.Id', 's.scheme_id')
    .select('sc.id', 'sc.scheme_name as Scheme', 's.step_number as Step', 's.instructions')
    .where('s.scheme_id', schemeId)
}

function add(scheme) {
    return db('schemes')
    .insert(scheme)
    .then(id => findById(id))
}

function update(changes, id) {
    return db('schemes')
    .where({ id })
    .update(changes, id);
}

function remove(id) {
    return db('schemes')
    .where('id', id)
    .del()
}

