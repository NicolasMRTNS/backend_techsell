const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.authorization
  const decodedToken = jwt.verify(token, 'RANDOM_SECRET_KEY')
  const userId = decodedToken.userId
  if (req.body.userId !== userId) {
    res.status(401).json({
      error: 'Invalid request!',
    })
  } else {
    next()
  }
}
