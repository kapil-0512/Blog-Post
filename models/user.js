
module.exports=(sequelize,DataTypes)=>{
    const User= sequelize.define('user',{
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        mobile:{
            type:DataTypes.INTEGER,
            allowNull:false,
            // unique: true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        timestamps:false
    });
    return User;
}










//------------------------------Signup Condition-------------------------------------//



// const signup = async (req, res) => {
//     req = req.body
//     // console.log(req.mobile);
//     const data1 = await User.findAll({ raw: true });
//     console.log("sdjfdsjfksdfsdjkfk", data1);
//     let data
//     if (data1.length > 0) {
//       for (const item of data1) {
//         console.log(item);
//         if (item.mobile == req.mobile) {
//           data = {
//             status: false,
//             message: "Number already exist"
//           }
  
//           // return res.status(201).send(data)
//         }
  
//         //  return res.status(200).send(data)
  
//       }
  
//       if (!data) {
//         console.log(req);
//         data = await User.create(req);
//         // Uncomment the following line if you want to send the response here
//         // return res.status(200).send(data);
//       }
  
//     } else {
//       data = await User.create(req);
//     }
  
  
  
//     // if(data1.mobile!=null){
//     //   return res.send('mobile number already exist')
//     // }
  
//     return res.send(data)
//   }