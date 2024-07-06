export const logoModelfile = `import mongoose from 'mongoose'

const logoSchema = mongoose.Schema({
  image: String,
})

const Logo = mongoose.model('Logo', logoSchema)

export default Logo
`
