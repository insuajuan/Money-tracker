const jwt = require('jsonwebtoken');

module.exports.verifyToken = async (req, res, next)=>{
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) return res.sendStatus(401)

    try {
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
      const { id } = decoded
      req.user = { id }
      next()
    } catch (err) {
      return res.sendStatus(401)
    }
  };