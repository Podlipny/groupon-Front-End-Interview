export * from './api'
export * from './mapper'

interface ImageListItem {
  id: number
  url: string
  size: string
}

export interface PhotoItem {
  id: number
  name: string
  images: {
    lists: {
      large: ImageListItem[]
      medium: ImageListItem[]
      small: ImageListItem[]
      original: ImageListItem[]
    }
  }
}

interface ContentType {
  items: PhotoItem[]
}

interface mainPart {
  type: string
  visible: string[]
  content: ContentType
}
/**
 * shoudl be in file related to photos, something like types/photos
 * or better lib/photos/photos.type.ts, lib/photos/photos.mapper.ts
 * */
export interface PhotosApiResponse {
  introPart: any[]
  mainPart: mainPart[]
}
