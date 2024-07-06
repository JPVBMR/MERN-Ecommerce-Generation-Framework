import mongoose from 'mongoose'

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('db is connect')
    })
    .catch((err) => console.log(err))
}

export default connectDB
