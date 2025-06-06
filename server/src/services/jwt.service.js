import jwt from 'jsonwebtoken';

const sign = (user) => {
  const token = jwt.sign(user, process.env.JWT_KEY);

  return token;
}

const verify = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_KEY)
  } catch (erro) {
    return null;
  }
}

const signRefresh = (user) => {
  const token = jwt.sign(user, process.env.JWT_REFRESH_KEY);

  return token;
};

const verifyRefresh = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH_KEY);
  } catch (error) {
    return null;
  }
};

export const jwtService = {
  sign,
  verify,
  verifyRefresh,
  signRefresh,
}