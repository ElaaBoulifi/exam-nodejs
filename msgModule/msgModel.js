var mongoose=require("mongoose")
var Schema=mongoose.Schema

var Msg=new Schema({
    pseudo:String,
    content:String,
    likes:Number
   
})
module.exports=mongoose.model("msg",Msg)