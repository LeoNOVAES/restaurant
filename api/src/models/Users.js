const {mongoose,Schema,model} = require("mongoose");

const UsersSchema = new Schema({
    user:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps: true,
});

module.exports = model("Users", UsersSchema);