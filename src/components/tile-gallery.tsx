import { memo } from 'react'

import { TileItem } from './tile-item'

import { PhotoItem } from '@lib'

interface TileGalleryProps {
  photos: PhotoItem[]
  checked: boolean
  isLoading: boolean
  isRefetching: boolean
}

export const TileGallery = memo<TileGalleryProps>(({ photos, checked, isLoading, isRefetching }: TileGalleryProps) => {
  if (isLoading) {
    return <div className='py-20 text-center'>Loading ...</div>
  }
  return (
    <div className='flex flex-col items-center'>
      <div className={`${isRefetching ? 'opacity-100' : 'opacity-0'} py-2`}>Loading new photos ...</div>
      <div className='grid sm:grid-cols-2 sm:grid-flow-row gap-4 w-full'>
        {photos?.map(({ id, name, images }) => (
          <TileItem key={id} name={name} greyScale={checked} images={images} />
        ))}
      </div>
    </div>
  )
})

TileGallery.displayName = 'TileGallery'
