var express = require('express');
var router = express.Router();
var service=require("./msgService");


router.post("/add",service.add)
router.put("/update/:id",service.update)
router.get("/list",service.list)
router.get("/delete/:id",service.deletemsg)


module.exports = router;