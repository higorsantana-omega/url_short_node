import { URLModel } from "../database/model/URL";
import { Request, Response } from "express";
import { nanoid } from "nanoid";

import { config } from '../config/Constants'

class URLController {
  async shorten(req: Request, res: Response): Promise<void>{
    const { originUrl } = req.body
    const url = await URLModel.findOne({ originUrl })

    if (url) {
      res.json(url)
      return
    }

    const hash = nanoid()
    const shortURL = `${config.API_URL}/${hash}`
    const newURL = await URLModel.create({ hash, shortURL, originUrl })
    
    res.json(newURL)
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