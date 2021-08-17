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
}

export { URLController }