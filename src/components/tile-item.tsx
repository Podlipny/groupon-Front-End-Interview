import { memo } from 'react'

import { PhotoItem } from '@lib'

interface TileItemProps extends Partial<PhotoItem> {
  greyScale?: boolean
}

export const TileItem = memo<TileItemProps>(({ name, greyScale, images }: TileItemProps) => (
  <div className='flex relative h-72 max-h-72'>
    {/* get resolution and choose proper image size */}
    <img
      className={`${greyScale && 'grayscale'} object-cover object-center w-full`}
      src={images?.lists?.medium?.[0].url}
      alt={name}
    />
    <div className='absolute bottom-0  text-center bg-gray-800 w-full h-9 pt-2 px-4 opacity-80 '>
      <p className='text-white opacity-80 text-sm align-middle truncate'>{name}</p>
    </div>
  </div>
))

TileItem.displayName = 'TileItem'
