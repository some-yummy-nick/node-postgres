const knex = require('../db')

class UserController {
  async createUser(req, res) {
    const { name, surname } = req.body
    const newPerson = await knex('person').insert({
      name,
      surname,
    })
    res.json(newPerson)
  }

  async getUsers(req, res) {
    const users = await knex('person')
    res.json(users)
  }

  async getUser(req, res) {
    const id = req.params.id
    const user = await knex('person').where('id', id)
    res.json(user)
  }

  async updateUser(req, res) {
    const { id, name, surname } = req.body
    const user = await knex('person')
      .update({
        name,
        surname,
      })
      .where('id', id)

    res.json(user)
  }

  async deleteUser(req, res) {
    const id = req.params.id
    const user = await knex('person').where('id', id).del()
    res.json(user)
  }
}

module.exports = new UserController()
