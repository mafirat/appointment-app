var db = require('./data');
const jsonServer = require('json-server');
const crypt = require("crypto-js")
const server = jsonServer.create();
const router = jsonServer.router(db.call());
const middlewares = jsonServer.defaults();
const jwt = require("jsonwebtoken");
const RESPONSES = {
  alreadyExists: {
    status: 401,
    message: 'Email or username already exist'
  },
  incorrectInfo: {
    status: 401,
    message: 'Incorrect email and password'
  },
  errorInAuthFormat: {
    status: 401,
    message: 'Error in authorization format'
  },
  tokenNotProvided: {
    status: 401,
    message: 'Access token not provided'
  },
  tokenNotValid: {
    status: 401,
    message: 'Access token not valid'
  }
}
const PORT = 3500;
const SECRET_KEY = "Loodos_MAF_102020";
const TOKEN_EXPIRES_IN = "10m"; // "1h", "7 days"

server.use(middlewares)
server.use(jsonServer.bodyParser)

function createTokenWith(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: TOKEN_EXPIRES_IN })
}

function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err)
}
function isAuthenticated({ email, password }) {
  const users = router.db.get("users").valueOf();
  return users.findIndex(user => user.email === email && user.password === password) !== -1;
}
function isExist({ email, username }) {
  const users = router.db.get("users").valueOf();
  return users.findIndex(user => user.email === email && user.username === username) !== -1;
}
function getUsername(email) {
  return router.db.get("users").valueOf().find(u => u.email === email).username;
}
server.post('/api/auth/register', (req, res) => {
  const { email, password, username } = req.body;

  if (isExist({ email, username }) === true) {
    res.status(RESPONSES.alreadyExists.status).json(RESPONSES.alreadyExists);
    return
  }
  const model = req.body;
  model.password = crypt.MD5(password).toString();
  delete model.rePassword;
  delete model.id;
  const users = router.db.get("users");
  users.push(model).write();
  const token = createTokenWith({ email, username });
  const expirationTime = jwt.decode(token).exp
  res.status(200).json({ email, username, accessToken: token, expirationTime })
})

server.post('/api/auth/login', (req, resp) => {
  const { email, password } = req.body;
  if (isAuthenticated({ email, password: crypt.MD5(password).toString() }) === false) {
    resp.status(RESPONSES.incorrectInfo.status).json(RESPONSES.incorrectInfo)
    return
  }
  const username = getUsername(email);
  const token = createTokenWith({ email, username })
  const expirationTime = jwt.decode(token).exp
  resp.status(200).json({ email, username, accessToken: token, expirationTime })
})

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(" ")[0] !== "Bearer") {
    res.status(RESPONSES.errorInAuthFormat.status).json(RESPONSES.errorInAuthFormat)
    return
  }
  try {
    let verifyResult;
    verifyResult = verifyToken(req.headers.authorization.split(" ")[1]);
    if (verifyResult instanceof Error) {
      res.status(RESPONSES.tokenNotProvided.status).json(RESPONSES.tokenNotProvided)
      return
    }
    const decoded = jwt.decode(req.headers.authorization.split(" ")[1]);
    req.query.username = decoded.username;
    if (req.method === "POST") {
      req.body.username = decoded.username;
      req.body.createdAt = new Date().toString();
    }
    next();
  } catch (err) {
    res.status(RESPONSES.tokenNotValid.status).json(RESPONSES.tokenNotValid)
  }
})

server.use('/api', router)
server.listen(PORT, () => {
  console.log(`RestApiServer started on port: ${PORT}`)
})