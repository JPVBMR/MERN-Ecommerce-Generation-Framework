export const cmsControllerFile = `import Page from './cmsModel.js'
import asyncHandler from 'express-async-handler'

const page = asyncHandler(async (req, res) => {
  try {
    const { page } = req.body //se já existe a pagina
    const found = await Page.findOne({ page })

    if (found) {
      const updated = await Page.findOneAndUpdate({ page }, req.body, {
        new: true,
      })
      return res.json(updated)
    } else {
      const created = await new Page(req.body).save()
      return res.json(created)
    }
  } catch (err) {
    console.log(err)
  }
})

const getPage = asyncHandler(async (req, res) => {
  try {
    const { page } = req.params
    const found = await Page.findOne({ page })
    return res.json(found)
  } catch (err) {
    console.log(err)
  }
})

export { page, getPage }
`
