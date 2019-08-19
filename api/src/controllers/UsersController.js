const Users = require("../models/Users");

module.exports = {
    async autentic(req,res){
        const user = await Users.findOne({ user:req.body.user, password:req.body.password });

        if(!user) return;

    }
}