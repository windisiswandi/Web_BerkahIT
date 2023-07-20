const express = require("express")
const app = express()
const path = require("path")


app.set("view engine", "ejs")   // ingat! setelah melakukan ini, ganti extensi file html > ejs
app.use("/assets", express.static("assets"))

app.get("/", (req, res) => {
    // secara default ini akan mencari file di directory views
    res.render("index")
})

// jika user memasukan url yang salah
app.use((req, res) => {
    res.send("not fil found")
})

app.listen(3000)