const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

exports.login = (req, res) => {
  User.findOne({ email: req.body[0].email })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ error: 'Email non trouvé dans la base de données.' })
      }
      bcrypt
        .compare(req.body[0].password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect.' })
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, 'RANDOM_SECRET_KEY', {
              expiresIn: '24h',
            }),
          })
        })
        .catch((error) => res.status(500).json({ error }))
    })
    .catch((error) => res.status(500).json({ error }))
}
