const knex = require('../db')

class PostController {
  async createPost(req, res) {
    const { title, content, userId } = req.body
    const newPost = await knex('post').insert({
      title,
      content,
      userId,
    })
    res.json(newPost)
  }

  async getPostsByUser(req, res) {
    const id = req.query.id
    const posts = await knex('post').where('user_id', id)
    res.json(posts)
  }
}

module.exports = new PostController()
