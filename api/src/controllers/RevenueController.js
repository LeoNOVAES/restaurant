const Revenue = require("../models/Revenue");

module.exports = {
    async store(req, res){
        try{
            const { title, ingredients, category, price } = req.body;
            const revenueExists = await Revenue.findOne({ title : title });
            if(revenueExists) return res.json({message : "Receita já existe!"});
            
            const revenue = await Revenue.create({
                title,
                category,
                ingredients,
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
        await Revenue.findOneAndRemove({ _id:req.params.id });
        return res.status(200).json("Deletado com sucesso");
    }
}