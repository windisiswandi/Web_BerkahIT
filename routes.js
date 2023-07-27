const express = require("express")
const app = express()
const {userCrud} = require('./models/data')



app.get("/", (req, res) => {
    // secara default ini akan mencari file di directory views
    res.render("index", {title: "Financial Record",
    is_login: req.session.login ? req.session.login : false})
})


// =======>>>>>> ROUTE LOGIN
app.get("/auth/login", (req, res) => {
    if (req.session.login) return res.redirect('/dashboard')
    res.render("login", {
        title: "Login Page",
        err: req.session.error ? req.session.error : false,
        is_login: req.session.login ? req.session.login : false
    })

    req.session.error = null
})

app.post("/auth/login", (req, res) => {
    userCrud.findBy(req.body, (data) => {
        if (data.status) {
            req.session.login = true
            req.session.userData = data.data
            res.redirect('/dashboard')
        }else {
            // membuat sessoin
            req.session.error = data.msg
            res.redirect("/auth/login")
        }
    })
})


// =======>>>>>> ROUTE REGISTER
app.get("/auth/register", (req, res) => {
    res.render("register", {
        title: "Register Page",
        err: req.session.error ? req.session.error : false,
        is_login: req.session.login ? req.session.login : false
    })

    req.session.error = null
})

app.post("/auth/register", (req, res) => {
    userCrud.tambahUser(req.body, (data) => {
        if (data.status) {
            res.redirect('/auth/login')
        }else {
            req.session.error = data.msg
            res.redirect('/auth/register')
        }
    })
})


// =======>>>>>> DASHBOARD
app.get("/dashboard", (req, res) => {
    if (!req.session.login) return res.redirect('/auth/login')
    res.send("<h1>ini halaman dashbaord</h1>")
})



module.exports = app

