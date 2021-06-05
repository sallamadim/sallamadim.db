# SallamadimDB
- Fast json database.
- Simple and easy to use.
- Multiple json files.

## Getting started
- Install the module.
```
npm install sallamadim.db
```
- Define to code.
```js
const { Database } = require('sallamadim.db')
const db = new Database("database.json")
```

## Notes
- You can set your own database. For example:
```js
const { Database } = require('sallamadim.db')
const db = new Database("./database/database.json")
```
- Path automatically set to ./

## Examples
```js
const { Database } = require('sallamadim.db')
const db = new Database("database.json")

//Set & push
db.set(`sallamadim`, "db") // Output: db
//With object:
db.set(`sallamadimObject`, {
    databaseName: "sallamadim.db",
    author: "sallamadım#3675"
}) // Output: { databaseName: 'sallamadim.db', author: 'sallamadım#3675' }
db.push(`push`, "push123") // Output: [ 'push123' ]

//Has & fetch & fetchAll
db.has(`sallamadim`) // Output: true
db.has(`sallamadim123`) // Output: false
db.fetch(`sallamadim`) // Output: db
db.fetchAll() /*
Output: 
{
  sallamadimObject: { databaseName: 'sallamadim.db', author: 'sallamadım#3675' },
  push: [ 'push123' ],
  sallamadim: 'db'
}
*/

// Subtract & add & delete
db.add(`number`, 19) // Output: 19
db.subtract(`number`, 10) // Output: 9
db.delete(`number`) // Output: true

// Clear database
db.clearDatabase()
```

## Changelog

### Soon™️