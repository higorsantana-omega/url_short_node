import express from 'express'
import { MongoConnection } from './database/MongoConnection'
import { URLController } from './controllers/URLController'

const app = express()
const database = new MongoConnection()

app.use(express.json())
database.connect()

const urlController = new URLController()

app.post('/shorten', urlController.shorten)
app.get('/:hash', urlController.redirect)

app.listen(7000, () => console.log("Server is running!"))