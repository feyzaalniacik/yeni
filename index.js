const express = require("express")
const mongoose = require("mongoose")
const Post = require("./Post")
const router = require("./router")

app = express()
app.use(express.json()) //json işlemleri yapacağımızı belirtir.

PORT = process.env.PORT || 3000
// eğer env bir dosyam varsa oraya gider ve içinde port diye bir alan varsa onu alır yoksa 3000 portunu alır.

// app.get('/', (req, res) => {
//     // console.log()
    
//     res.status(200).json("running")
// })


// BU KISIM KULLANIM KOLAYLIĞI İÇİN ROUTER.JS SAYFASINA TAŞINMIŞTIR
// app.post('/', async (req, res) => { 
//     try {
//         //Destruting
//         const {author, title, content, picture} = req.body;
//         //alttaki ile üstteki aynı şeyi ifade eder.
//         // const author = req.body.author;

//         const post = await Post.create({author, title, content, picture}) //Post mongoos'u ile insert işlemi yapılır. post edilen şey geriye döndürülür. bu şekilde neye insert ettiğimizi görebiliriz.
//         res.json(post)

//     } catch (error) {

//     }
// })



app.use('/api', router) //api yazılmayadabilirdi ama standartlara uyması için bu kullanılır.


// internette url kısmına localhost:3000 yanına /?test=naber&query=123 yazılması query string olarak isimlendirilir. data taşımaya yarar.

const DB_URL = 'mongodb+srv://Feyza:feyza123@cluster0.gis9o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const startApp = async() => {
    try{
        await mongoose.connect(DB_URL, { //başına await eklemek async çalışması için lazım
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        app.listen(PORT, () => console.log("server running.."))
    }
    catch (error){
        console.log(error)
    }
}

startApp()
