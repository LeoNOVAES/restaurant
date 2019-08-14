const {mongoose,Schema,model} = require("mongoose");

const RevenueSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    
    ingredients:[{
        type: Schema.Types.String,
        required:true
    }],

    category:{
        type:String,
        required:true
    },

    price:{
        type: Number,
        required:true
    }

},{
    timestamps: true,
});

module.exports = model("Revenue", RevenueSchema);