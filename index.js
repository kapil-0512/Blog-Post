const express= require('express');
const app=express();
const cors = require("cors")
app.use(cors())
app.use(express.json())
const multer= require('multer');
app.use((req,res,next)=>{
console.log(req.url);
next()
})
require('./models')


const UserCtrl= require('./controllers/userCont');
const PostCtrl= require('./controllers/postCont');



// const storage= multer.diskStorage({
//     destination: function(req,file,cb){
//         return cb(null,"./public/images")
//     },
//     filename:function (req,file,cb){
//         return cb(null, `${Date.now()}_${file.originalname}`)
//     }
// })

// const upload= multer({storage})


// app.post('/upload', upload.single('file'), (req,res)=>{
//     console.log(req.body);
//     const imgName= req.file.filename
// })

const storage= multer.diskStorage({
    destination: function(req,file,cb){
        return cb(null,"public/")
    },
    filename:function (req,file,cb){
        return cb(null, Date.now()+file.originalname)
    }
})

const upload= multer({storage})

app.post('/upload', upload.single('file'), (req,res)=>{
    console.log(req.body);
    // const imgName= req.file.filename
    res.send("uploaded")
})


app.get('/',(req,res)=>{
    res.send('hello Kapil')
})

app.post('/signup', UserCtrl.signup)

app.post('/login', UserCtrl.login)

app.post('/createPost',PostCtrl.createPost)

app.put('/updatePost/:id',PostCtrl.update)

app.delete('/deletePost/:id',PostCtrl.deletePost)

app.get('/findAllPost',PostCtrl.findAll)

app.get('/findPostById/:id',PostCtrl.postId)









app.listen(4000);