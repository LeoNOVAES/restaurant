const Users = require("../models/Users");
const key = require("../../config/key.json");
const jwt = require("jsonwebtoken");

module.exports = {
    async autentic(req,res){
        const user = await Users.findOne({ user:req.body.user, password:req.body.password });
            if(!user) return res.status(500).json("Email ou senha incorretos");

        const token = jwt.sign({ id:user._id}, key.secret,{
            expiresIn:86400
        }); 

        res.status(200).json({"token":token});
    },

    async middleToken(req,res,next){
        const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization;

        if(!token) return res.status(403).json("Não existe Token");

        jwt.verify(token, key.secret,(err, decoded)=>{
            
            if(err) return res.status(500).json(err);

            req.decoded = decoded;

            return next();
           
        });
    }
}