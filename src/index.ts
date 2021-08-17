import express, { Request, Response } from 'express'

const app = express()

app.use(express.json())

app.get('/test', (req: Request, res: Response) => {
  res.json({ success: true })
})

app.listen(7000, () => console.log("Server is running!"))