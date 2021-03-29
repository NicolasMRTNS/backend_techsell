const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.signup = (req, res) => {
  bcrypt
    .hash(req.body[0].password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body[0].email,
        password: hash,
      })
      user
        .save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch((error) => res.status(400).json({ error }))
    })
    .catch((error) => res.status(500).json({ error }))
}

exports.login = (req, res) => {}
