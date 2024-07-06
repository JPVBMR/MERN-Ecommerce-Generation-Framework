export const generateTokenFile = `import jwt from 'jsonwebtoken'
import userChoices from '../../frontend/src/userChoices.json' assert { type: 'json' }

const generateToken = (resp, userID) => {
  const jwtSecret = userChoices.authPages.JWT_SECRET
  const token = jwt.sign({ userID }, jwtSecret, {
    expiresIn: '1d',
  })

  /* Set JWT as HTTP-ONLY Cookie */
  resp.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // true on production orgs
    sameSite: 'strict', // prevent attacks
    maxAge: 1 * 24 * 60 * 60 * 1000, //1 day
  })

  return token
}

export default generateToken
`
