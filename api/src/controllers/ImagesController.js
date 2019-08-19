const Revenue = require("../models/Revenue");
const fs = require('fs');

module.exports = {
    async index(req,res){
        const image = await Revenue.find({image : req.params.image});
        if(!image) return;
        fs.readFile("./src/static/revenue/"+image[0].image+".jpg",(err, img)=>{
            if(err) return res.status(500).json(err);
 
            res.writeHead(200,{"content-type":"image/jpg"});
            res.end(img);
        });
    },
}