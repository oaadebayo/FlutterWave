const ApiError = require("../error/apierror");

//const ApiError = require('../error/apierror');

function  validateDto(schema) {
    return async (req, res, next) =>{
        try{
           const validateBody = await schema.validate(req.body);
           req.body = validateBody;
           next();
        }catch(err){
            next(ApiError.badRequest(err));
        }
    }
    
}

module.exports = validateDto;