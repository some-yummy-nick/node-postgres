require('dotenv').config()

const express = require('express')
const userRouter = require('./routes/user')
const postRouter = require('./routes/post')
const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`)
})
