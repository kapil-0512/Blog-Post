const {Sequelize, DataTypes}= require('sequelize');

const sequelize= new Sequelize('blog','root','',{
    host:'localhost',
    dialect:'mysql'
});

try{
    
    sequelize.authenticate();
    console.log('connected')
}
catch(err){
    console.log('error in connection',err)
}

const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.user= require('./user')(sequelize,DataTypes)
db.post= require('./post')(sequelize,DataTypes)


db.sequelize.sync({force:false})
.then(()=>{
    console.log('yes re-sync')
})



module.exports=db;