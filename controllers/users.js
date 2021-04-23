import User, { findOne } from '../models/User'
import { hash as _hash, compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

export function signup(req, res) {
  _hash(req.body[0].password, 10)
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

export function login(req, res) {
  findOne({ email: req.body[0].email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé.' })
      }
      compare(req.body[0].password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect.' })
          }
          res.status(200).json({
            userId: user._id,
            token: sign({ userId: user._id }, 'RANDOM_SECRET_KEY', {
              expiresIn: '24h',
            }),
          })
        })
        .catch((error) => res.status(500).json({ error }))
    })
    .catch((error) => res.status(500).json({ error }))
}
