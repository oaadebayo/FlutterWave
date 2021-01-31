const router = require("express").Router();
const getDetails = require('../../validation/t1/t1schema');
const validateDto = require('../../middleware/validatedto');
const devController = require('../../controller/dev');
const devDto = require('../../bizlogicc/dto');
const {addUserValidation} = require('../../validation/t1/t1validation');
router.get("/", function (req,res){
    getDetails(req, res);
});
router.post('/validaterule', validateDto(devDto), devController.createDev);

module.exports = router; 