import { prop, Typegoose } from '@hasezoey/typegoose'

class URL extends Typegoose {
  @prop({ required: true })
  hash: string

  @prop({ required: true })
  originUrl: string

  @prop({ required: true })
  shortURL: string
}

const URLModel = new URL().getModelForClass(URL)

export { URLModel }