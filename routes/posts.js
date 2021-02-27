const router = require("express").Router();
const verify = require('./verifyToken')


router.get("/", verify , (req,res) =>{
    res.json({
        posts: {
            title: "first mothher fucker",
            description: "random mother fuceker"
        }
    })
})




module.exports = router;