const express = require('express')
const app = express()
const port =process.env.PORT || 8085
const connect = require('./db/mongoDB')
const morgan = require('morgan')
const USER_ROLE = require('./model/userRoleModel.js')
// const connect = require('./db/mongoDB')
const userRouter = require('./router/userRouter')
const cors = require('cors')


//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//API's
app.use('/', userRouter)

// home page route
app.get('/', (req, res)=> {
  res.send('welcome home')
})


//db connection and server
connect()
.then(()=>{
  try{
    app.listen(port,()=>console.log(`server connected to http://localhost:${port}`))
  }catch(error){
    console.log('cannot connect to the server');
  }
})

//server
// app.listen(port,()=>console.log(`server connected to http://localhost:${port}`))