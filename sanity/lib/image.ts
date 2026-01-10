
import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}
// Helper to get optimized image URL

export function getImageUrl(source: SanityImageSource, width?: number, height?: number) {

  let image = urlFor(source).auto('format').fit('max')

  if (width) {

    image = image.width(width)

  }
  if (height) {

    image = image.height(height)

  }

  return image.url()

}