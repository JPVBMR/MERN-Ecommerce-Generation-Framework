export const cmsModelFile = `import mongoose from 'mongoose'

const pageSchema = mongoose.Schema(
  {
    page: {
      type: String,
      lowercase: true,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },

    title: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
    logo: {
      type: String,
      required: false,
    },
    navcolor: {
      type: String,
      required: false,
    },
    show: {
      type: Boolean,
      required: false,
    },
    footer: {
      type: Boolean,
      required: false,
    },
    navbar: {
      type: Boolean,
      required: false,
    },
    tamanhonavbar: {
      type: String,
      required: false,
    },
    tamanhoimagem: {
      type: String,
      required: false,
    },
    rodape: {
      type: String,
      required: false,
    },
    novocamponome: {
      type: String,
      required: false,
    },
    marca: {
      type: String,
      required: false,
    },
    textcolor: {
      type: String,
      required: false,
    },
    darkmode: {
      type: Boolean,
      required: false,
    },
    novocampo: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
)

const Page = mongoose.model('Page', pageSchema)

export default Page
`
