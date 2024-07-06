export const connectDBFile = `import mongoose from 'mongoose'

const connectDB = async (uri) => {
    mongoose.set("strictQuery", false)
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB Cluster')
    })
    .catch((err) => console.log(err))
}

export default connectDB
`
