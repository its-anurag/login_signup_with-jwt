const jwt = require("jsonwebtoken")

exports.generateAccessToken = (username) bv     => {
  return jwt.sign(username, 'anurag', { expiresIn: '10h' });
}


exports.authenticateToken = (req, res, next) => {
  if (req.headers.cookie == undefined) {
    console.log({ message: 'Token not found' });
    return res.status(403).json({ message: 'TOken not found' })
  }
  const token = req.headers.cookie.split('=')[1]
  jwt.verify(token, 'anurag', (err, data) => {
    if (err) {
      console.log({ message: "JWT expired" });
      return res.status(401).json({ message: err })
    }
    req.data=data
    next()
  });

}