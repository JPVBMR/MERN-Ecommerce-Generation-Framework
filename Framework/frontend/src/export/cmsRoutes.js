export const cmsRoutesFile = `import express from 'express'

const router = express.Router()

import { page, getPage } from './cmsController.js'

router.route('/page').post(page)
router.route('/page/:page').get(getPage)

export default router
`
