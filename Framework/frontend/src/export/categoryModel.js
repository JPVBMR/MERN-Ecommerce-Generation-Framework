export const categoryModelFile = `import mongoose from 'mongoose'

const categorySchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    parentId: {
      type: String,
    },
  },
  { timestamps: true }
)

const Category = mongoose.model('Category', categorySchema)

export default Category
`
