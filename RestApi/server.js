var db = require('./data');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(db.call());
const middlewares = jsonServer.defaults();
const jwt = require("jsonwebtoken");

const RESPONSES = {
  alreadyExists: {
    status: 401,
    message: 'Email already exist'
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
const TOKEN_EXPIRES_IN = "1h";

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
function isExist({ email }) {
  const users = router.db.get("users").valueOf();
  return users.findIndex(user => user.email === email) !== -1;
}

server.post('/api/auth/register', (req, res) => {
  const { email, password } = req.body;

  if (isExist({ email }) === true) {
    res.status(RESPONSES.alreadyExists.status).json(RESPONSES.alreadyExists);
    return
  }

  const users = router.db.get("users");
  users.push(req.body).write();
  const token = createTokenWith({ email, password });
  res.status(200).json({ email, accessToken: token })
})

server.post('/api/auth/login', (req, resp) => {
  const { email, password } = req.body;
  if (isAuthenticated({ email, password }) === false) {
    resp.status(RESPONSES.incorrectInfo.status).json(RESPONSES.incorrectInfo)
    return
  }
  const nToken = createTokenWith({ email, password })
  resp.status(200).json({ email, accessToken: nToken })
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
    next();
  } catch (err) {
    res.status(RESPONSES.tokenNotValid.status).json(RESPONSES.tokenNotValid)
  }
})
server.use('/api', router)
server.listen(PORT, () => {
  console.log(`RestApiServer started on port: ${PORT}`)
})