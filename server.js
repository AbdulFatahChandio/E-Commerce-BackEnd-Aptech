import express from 'express'
import connectDB from './config/db.js'
import router from './routes/authRoutes.js';
import morgan from 'morgan';
import fs from 'fs'
import path from 'path'
import cors from 'cors'

const app=express()
const port=5000

const logDir='D:/NewData'
const logFilePath=path.join(logDir,'log.txt')
const logStream=fs.createWriteStream(logFilePath,{flags:'a'})

const corsOptions={
    origin:'http://localhost:3000',
    credential:true,
    optionSuccessStatus:200
}

app.use(morgan('dev'))
app.use(morgan('combined',{stream:logStream}))
app.use(cors(corsOptions))

//database connection
connectDB()
app.use(express.json())

app.use('/',router)

app.get('/',(req,res)=>{
    res.send('Its my main site')
})

app.listen(port,()=>
    {
        console.log(`server connected on http://localhost:${port}`)
    }
)
