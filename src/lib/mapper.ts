import { PhotoItem, PhotosApiResponse } from '@lib'

export const mapPhotos = (photos: PhotosApiResponse): PhotoItem[] => {
  const crazyPricesItems = photos.mainPart.find(({ type }) => type.toLocaleLowerCase() === 'crazypricesitems')

  return crazyPricesItems?.content?.items?.sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 4) || []
}
