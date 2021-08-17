import { Request, Response } from "express";
import { nanoid } from "nanoid";

import { config } from '../config/Constants'

class URLController {
  async shorten(req: Request, res: Response): Promise<void>{
    const { originUrl } = req.body
    const hash = nanoid()
    const shortURL = `${config.API_URL}/${hash}`
    
    res.json({ originUrl, hash, shortURL })
  }

  async redirect(req: Request, res: Response): Promise<void>{
    const { hash } = req.params
    const url = {
      originURL: "https://cloud.mongodb.com/v2/611bf6731f7cdb5c4a457dd7#clusters/connect?clusterId=Cluster0",
      hash: "VB1J7ZQaBGqp4OBMnTKnf",
      shortURL: "http://localhost:7000/VB1J7ZQaBGqp4OBMnTKnf"
    }
    res.redirect(url.originURL)
  }
}

export { URLController }