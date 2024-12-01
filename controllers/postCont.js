// const {} = require('sequelize')
const db=require("../models/index");



const Post=db.post;


const createPost=async (req,res)=>{
       req=req.body;
    const data=await Post.create({imgUrl:req.imgUrl,title:req.title,description:req.description});
    res.send(data)
}

const update=async (req,res)=>{
    let postId = req.params.id
    req=req.body
      const data=await Post.update({imgUrl:req.imgUrl,title:req.title,description:req.description},{
        where:{
            id:postId
        }
      });
      res.send(data)
}

const deletePost = async (req,res)=>{
    const data= await Post.destroy({
        where:{
            id:req.params.id
        } 
    })
    // res.send(data)
}

const findAll=async (req,res)=>{
    const data= await Post.findAll({
        attributes:[
            "id",
            "imgUrl",
            "title",
            "description"
        ]
    });
    res.send(data) 
}

const postId=async (req,res)=>{

    const data= await Post.findByPk(req.params.id)
    res.send(data)
}




module.exports={
    createPost,
    update,
    deletePost,
    findAll,
    postId
}