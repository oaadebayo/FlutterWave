const joi = require("@hapi/joi");

const schema = {
    t1: joi.object({
        first_name: joi.string().max(100).required(),
        last_name:joi.string().max(100).required(),
        gebder: joi.string().valid("m", "f", "o").required(),
        email: joi.string().email().required(),
        number: joi.number().integer().min(10000000000).message("Invalid mobile number").max(99999999999).message("Invalid mobile number").required(),


    })
};

function details (req, res){
 res.json({
        "message": "My Rule-Validation API",
        "status": "success",
        "data":{
            "name": "Oluremi Adebayo",
            "github": "@oaadebayo",
            "email": "remmyghty@gmail.com",
            "mobile": "08109923858",
            "twitter": "@remiadebayor"
        }
    })
};
module.exports = schema;
module.exports = details;