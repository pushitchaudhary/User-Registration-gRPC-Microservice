import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { databaseConnection } from './config/mongoDbConfig'
import userRoutes from './routes/userRoutes'

const app = express()

dotenv.config() 
databaseConnection()

app.use(bodyParser.json())

app.get('/',(req,res) => {
    res.send("Hello World")
})

app.use('/api', userRoutes)


app.listen(3001, () => {
    console.log("Server is running on port 3001")
})