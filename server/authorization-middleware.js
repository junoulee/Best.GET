const jwt = require('jsonwebtoken');
const ClientError = require('./client-error');

function authorizationMiddleware(req, res, next) {
  // console.log('MIDDLEWARE', req);
  const token = req.get('X-Access-Token');
  // console.log('TOKEN', token);
  if (!token) {
    throw new ClientError(401, 'authentication required');
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) throw new ClientError(401, 'unauthorized request');
    // * Assign the extracted payload to the user property of the req object.
    else req.user = decoded;
    // * Call next() (with no arguments) to let Express know to advance to its next route or middleware.
    next();
  });
}

module.exports = authorizationMiddleware;
