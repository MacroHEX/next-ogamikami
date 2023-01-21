import {client} from "./sanity.client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(client);

export const urlFor = (source:any) => (
    builder.image(source)
)