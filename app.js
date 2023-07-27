require("dotenv").config()
const express = require("express")
const app = express()
const routes = require('./routes')

const PORT = process.env.PORT || 3000
 
// set session
const session = require("express-session")
app.use(session({
    secret: "alsdjfe3fkamdsf",
    saveUninitialized: true,
    resave: false
}))

app.set("view engine", "ejs")   // ingat! setelah melakukan ini, ganti extensi file html > ejs
app.use("/assets", express.static("assets"))
app.use(express.urlencoded({extended: true}))

app.use(routes)

// jika user memasukan url yang salah
app.use((req, res) => {
    res.send("not fil found")
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})