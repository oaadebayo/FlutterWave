const {t1} = require("./t1schema");

module.exports = {
    addUserValidation: async(req,res, next)=>{
        const value = await t1.validate(req.body);
        if (value.error){
            res.json({
                success:0,
                message: value.error.details[0].message
            })
        }else{
            next();
        }
    }
}
