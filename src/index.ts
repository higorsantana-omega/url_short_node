import { URLController } from './controllers/URLController'
import express, { Request, Response } from 'express'

const app = express()

app.use(express.json())

const urlController = new URLController()

app.post('/shorten', urlController.shorten)
app.get('/:hash', urlController.redirect)

app.listen(7000, () => console.log("Server is running!"))