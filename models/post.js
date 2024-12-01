module.exports=(sequelize,DataTypes)=>{
    const Post=sequelize.define('post',{
        imgUrl:{
           type: DataTypes.STRING
        },
        title:{
          type:  DataTypes.STRING
        },
        description:{
          type: DataTypes.STRING
        }
        
    },{
        timestamps:false
    }
    );
    return Post;
}