export const productModelFile = `import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Category',
    },
    description: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    novocampo: { name: { type: String }, content: { type: String } },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
`
