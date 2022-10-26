const router = require("express").Router()
const joinPath = require("path").join

router.get("/:file", (req,res)=>{
    res.sendFile(joinPath(__dirname, `../public/${req.params.file}`))
})

module.exports = router