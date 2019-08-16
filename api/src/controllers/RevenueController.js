const Revenue = require("../models/Revenue");
const fs = require('fs');

module.exports = {
    async store(req, res){
        try{
            const { title, ingredients , category, price } = req.body;
            const file = req.files.image;
            const revenueExists = await Revenue.findOne({ title : title });
            if(revenueExists) return res.json({message : "Receita já existe!"});
            
            const date = new Date();
            const image = date.getTime()+"_"+ file.originalFilename;
            const originPath = file.path;
            const destinyPath = "./src/static/revenue/"+image+".jpg";

            fs.rename(originPath, destinyPath,(err)=>{
               if(err) return err;
            });

            const revenue = await Revenue.create({
                title,
                category,
                ingredients,
                image,
                price
            }); 

            return res.status(202).json(revenue);

        }catch(e){
            console.log(e.message);
            return res.status(500).json("erro inesperado");
        }
    },

    async index(req,res){

        const revenues = await Revenue.find();
        return res.status(200).json(revenues);
    },

    async indexById(req, res){

        const revenue = await Revenue.findById(req.params.id);
        return res.status(200).json(revenue); 
    },

    async update(req,res){

        const revenue = await Revenue.update({_id:req.params.id}, req.body);
        return res.json(revenue);
    },

    async delete(req,res){

        const revenue = await Revenue.findById({ _id:req.params.id });
        await Revenue.findOneAndDelete({ _id:req.params.id });
        const path = "./src/static/revenue/"+revenue.image+".jpg";
        
        fs.unlink( path ,(err)=>{
            console.log(err)
        });

        return res.status(200).json("Deletado com sucesso");
    }
}