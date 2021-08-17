import { URLModel } from "../database/model/URL";
import { Request, Response } from "express";
import { nanoid } from "nanoid";

import { config } from "../config/Constants";

class URLController {
  async shorten(req: Request, res: Response): Promise<void> {
    const { originUrl } = req.body;
    const url = await URLModel.findOne({ originUrl });

    if (url) {
      res.json(url);
      return;
    }

    const hash = nanoid();
    const shortURL = `${config.API_URL}/${hash}`;
    const newURL = await URLModel.create({ hash, shortURL, originUrl });

    res.json(newURL);
  }

  async redirect(req: Request, res: Response): Promise<void> {
    const { hash } = req.params;
    const url = await URLModel.findOne({ hash });

    if (url) {
      res.redirect(url.originUrl);
      return;
    }

    res.status(400).json({ error: "URL not found" });
  }
}

export { URLController };
