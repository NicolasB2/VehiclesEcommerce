const mongoose  = require('mongoose')
//Crear una base de datos name:ecommerce
let url = "mongodb+srv://david_29:david1999@cluster0.qfbsz.mongodb.net/<ecommerce>?retryWrites=true&w=majority";

mongoose.set("useNewUrlParser", true)
mongoose.set("useUnifiedTopology", true)

mongoose.connect(url)

let db = mongoose.connection

db.on("error", console.error.bind(console, "Mongo connection error"))

module.export = db