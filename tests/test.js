const {Database} = require('../sallamadim')
const db = new Database("test.json")
function clear() {
db.clearDatabase()
}
function unpush(data, value) {
db.unpush(data, value)
}
function set(data, value) {
db.set(data, value)
}
function deleteEach(data) {
db.deleteEach(data)
}
deleteEach("ok")