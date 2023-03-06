var express = require('express');
var msg = require ("./msgModel")

async function add(req,res,next){
console.log("add");
   await new msg(
     {
        pseudo:req.body.pseudo,
        content:req.body.content,
        likes:req.body.likes
      
    }).save().then((err,data)=>{
        if(err){
            res.status(200).json(err)}else{
        console.log(data)
        res.json(data)}
    })
    }
async function update(req,res,next)
 {
   await msg.findByIdAndUpdate(req.params.id,{
      
        pseudo:req.body.pseudo,
        content:req.body.content,
        likes:req.body.likes
    
    },{new:true})
    res.end()
 }

    

async function list(req,res,next)
  {
   await msg.find().then((obj,err)=>{
        if(err){console.error(err);}else{
            res.json(obj)

            console.log(obj)
        }
       })
    
    
    }


async function deletemsg(req,res,next)
     {
       
      await msg.findOne({_id:req.params.id}
       ).deleteOne().then((obj,err)=>{
         if(err){console.error(err)}
         else{
           console.log("element supprimeé")
         }
       
         res.end()
       })
       
  

      
       
     }   




    
module.exports={add,update:update,list:list,deletemsg:deletemsg}