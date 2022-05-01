// CONTROLLER TARAFINI GÖSTERİR
const Post = require("./Post")

class PostService {
    // class içinde function yazmaya gerek yoktur
    async create(){
        const createdPost = await Post.create(post)
        return createdPost;
    }
    async getAll(){
        
    }
    async getOne(){
        
    }
    async update(){
        
    }
    async delete(){
        
    }
}

module.exports = PostService