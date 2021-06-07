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

// Set & push & unpush & delete & remove
db.set(`sallamadim`, "db") // Output: db
db.delete(`sallamadim`) // Output: true

// With object:
db.set(`sallamadimObject`, {
    databaseName: "sallamadim.db",
    author: "sallamadım#3675"
}) // Output: { databaseName: 'sallamadim.db', author: 'sallamadım#3675' }
db.remove(`sallamadimObject`) // Output: true

db.push(`push`, "push123") // Output: [ 'push123' ]
db.push(`push`, "push321") // Output: [ 'push123' , 'push321' ]
db.unpush(`push`, "push123") // Output: [ 'push321' ]

// deleteEach
db.set(`ok`, "ok123")
db.set(`okk`, "ok321")
db.set(`okkk`, "ok432")
db.deleteEach("ok") // Output: true

// Has & fetch & fetchAll
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

// Subtract & add
db.add(`number`, 19) // Output: 19
db.subtract(`number`, 10) // Output: 9

// Clear database
db.clearDatabase()
```

## Changelog

### v0.0.2
- Added **unpush** method.
- Added **remove** method.
- Added **deleteEach** method.
- Fixed bugs.