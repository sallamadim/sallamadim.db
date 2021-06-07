const fs = require('fs')
const load = (file) => JSON.parse(fs.readFileSync(file, "utf-8"))
const write = (file, data) => fs.writeFileSync(file, JSON.stringify(data, null, 4))
const extensions = (path) => {
let parts = path.split('.')
return parts[parts.length - 1]
}
class Database {
constructor(file) {
this.file = file || "database.json"
if(this.file === "database.json") {
try {
load(this.file)
} catch {
write(this.file, {})
}
} else {
if(!this.file.includes("./")) this.file = "./" + this.file
if(extensions(this.file) !== "json") throw new Error("sallamadim.db | The file must be json.")
try {
load(this.file)
} catch {
write(this.file, {})
}
}
}
set(data, value) {
if(!data) throw new Error("sallamadim.db | There is no data to set.")
if(!value) throw new Error("sallamadim.db | There is no value to set.")
let file = load(this.file)
file[data] = value
write(this.file, file)
return 
}
delete(data) {
if(!data) throw new Error("sallamadim.db | There is no data to delete.")
let file = load(this.file)
if(!file[data]) throw new Error("sallamadim.db | This data is not exists.")
file[data] = undefined
write(this.file, file)
return 
}
add(data, value) {
if(!data) throw new Error("sallamadim.db | There is no data to add.")
if(!value) throw new Error("sallamadim.db | There is no value to add.")
if(typeof value == "number") {
let file = load(this.file)
if(file[data] == undefined) return this.set(data, value)
if(isNaN(file[data])) return this.set(data, value)
file[data] = file[data] + value
write(this.file, file)
return 
} else {
let file = load(this.file)
if(file[data] == undefined) return this.set(data, value)
if(isNaN(file[data])) return this.set(data, value)
file[data] = file[data] + value
write(this.file, file)
return 
}
}
substr(data, value) {
if(!data) throw new Error("sallamadim.db | There is no data to subtract.")
if(!value) throw new Error("sallamadim.db | There is no value to subtract.")
if(typeof value !== "number") throw new Error("sallamadim.db | The value must be number to subtract.")
let file = load(this.file)
if(file[data] == undefined) return this.set(data, value)
if(isNaN(file[data])) return this.set(data, value)
file[data] = file[data] - value
write(this.file, file)
return 
}
push(array, value) {
if(!array) throw new Error("sallamadim.db | There is no data to push.")
if(!value) throw new Error("sallamadim.db | There is no value to push.")
let file = load(this.file)
if(file[array] && Array.isArray(file[array])) {
file[array].push(value)
write(this.file, file)
} else if(!file[array]) {
this.set(array, [value])
}
}
unpush(data, value) {
if(!data) throw new Error("sallamadim.db | There is no data to unpush.")
if(!value) throw new Error("sallamadim.db | There is no value to unpush.")
let file = load(this.file)
var arr = []
if(file[data]) {
arr = file[data]
}
arr = arr.filter((x) => x !== value)
this.set(data, arr)
return file[data]
}
has(data) {
if(!data) throw new Error("sallamadim.db | There is no data to check.")
let file = load(this.file)
if(file[data]) return true
if(!file[data]) return false
return 
}
clearDatabase() {
return write(this.file, {})
}
fetchAll() {
return load(this.file)
}
fetch(data) {
if(!data) throw new Error("sallamadim.db | There is no data to fetch.")
let file = load(this.file)
if(!file[data]) file[data] = null
return file[data]
}
get(data) {
if(!data) throw new Error("sallamadim.db | There is no data to get.")
let file = load(this.file)
if(file[data]) file[data] = null
return file[data]
}
deleteEach(data) {
if(!data) throw new Error("sallamadim.db | There is no data to delete each.")
let file = load(this.file)
let item = Object.keys(file)
if(item === "") throw new Error("sallamadim.db | There is nothing to delete each.")
item = item.filter((dataa) => dataa.includes(data))
item.forEach((dataaa) => {
this.remove(dataaa)
})
return;
}
remove(data) {
if(!data) throw new Error("sallamadim.db | There is no data to remove.")
let file = load(this.file)
if(!file[data]) throw new Error("sallamadim.db | This data is not exists.")
file[data] = undefined
write(this.file, file)
return;
}
}
module.exports = {Database}