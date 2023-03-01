const express = require('express')
const router = express.Router()

const test = require('../components/ioSocketEmitComponent')


router.get('/', test.test)

router.get('/auth', test.auth)

module.exports = router