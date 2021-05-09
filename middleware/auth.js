const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization
    const decodedToken = jwt.verify(token, 'RANDOM_SECRET_KEY')
    const userId = decodedToken.userId
    if (req.body.userId !== userId) {
      throw 'Invalid user ID'
    } else {
      next()
    }
  } catch (error) {
    res.status(401).json({ error })
  }
}
