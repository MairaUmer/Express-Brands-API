const express = require('express')
const app = express()
require('dotenv').config()
const BrandRouter  =require('./API/Brand/Router')

const port = process.env.SERVER_PORT || 4200

app.use(express.json())
app.use('/api', BrandRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})