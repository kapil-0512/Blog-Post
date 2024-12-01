const { Sequelize, DataTypes } = require("sequelize")
const db = require('../models/index')
const jwt = require('jsonwebtoken');
const secretKey = "secretKey";


const User = db.user;


const signup = async (req, res) => {
  req = req.body
  // console.log(req.mobile);
  const data1 = await User.findAll({ raw: true });
  console.log("sdjfdsjfksdfsdjkfk", data1);
  let data
  if (data1.length > 0) {
    for (const item of data1) {
      console.log(item);
      if (item.mobile == req.mobile) {
        data = {
          status: false,
          message: "Number already exist"
        }

        // return res.status(201).send(data)
      }

      //  return res.status(200).send(data)

    }

    if (!data) {
      console.log(req);
      data = await User.create(req);
      // Uncomment the following line if you want to send the response here
      // return res.status(200).send(data);
    }

  } else {
    data = await User.create(req);
  }



  // if(data1.mobile!=null){
  //   return res.send('mobile number already exist')
  // }

  return res.send(data)
}
  

const login = async (req, res) => {
  req = req.body
  const data = await User.findOne({ where: { mobile: req.mobile }, raw: true });
  console.log(data);
  if (data == null) {
    // console.log("hello from mobile");
    return res.send(
      {
        status: false,
        message: 'Wrong Credentials'
      }
    )
  }
  else if (data.password !== req.password) {
    console.log("hello from password");

    return res.send({
      status: false,
      message: 'Wrong Credentials'
    })
  }

  const token = jwt.sign({ id: data.id }, secretKey, { expiresIn: '300s' });

  res.send({
    status: true,
    message: "signed in successfully",
    token: token
  })

  //   jwt.sign({User},secretKey,{expiresIn:'300s'},(err,token)=>{
  //         res.json({
  //           token
  //         })
  //   })

}





module.exports = {
  signup,
  login
}