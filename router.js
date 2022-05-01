const {Router} = require("express")
const PostController = require("./PostController")

const router = Router() //Router bir express metodudur.


// BU KISIM KULLANIM KOLAYLIĞI İÇİN POSTCONTROLLER.JS SAYFASINA TAŞINMIŞTIR
// router.post('/posts', async (req, res) => { 
//     try {
//         //Destruting
//         const {author, title, content, picture} = req.body;
//         //alttaki ile üstteki aynı şeyi ifade eder.
//         // const author = req.body.author;

//         const post = await Post.create({author, title, content, picture}) //Post mongoos'u ile insert işlemi yapılır. post edilen şey geriye döndürülür. bu şekilde neye insert ettiğimizi görebiliriz.
//         res.json(post)
//         // bu işlemi bölebilmek için controller kullanılır

//     } catch (error) {

//     }
// })

const postController = new PostController()

router.post('/posts', postController.create)
// express yapısına bağlıdır hala


module.exports = router