import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    username : {
        type : String ,
        required : true ,
        unique : true ,
        lowercase : true ,
    } , 
    email : {
        type : String ,
        required : true ,
        unique : true ,
        lowercase : true 
    },
    password : {
        type : String ,
        required : [true,"password is required"] 
    },
    isActive : Boolean ,
},{
    timestamps : true 
});

export const User = mongoose.model("User",usersSchema);
