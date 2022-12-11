import React, { memo, useCallback, useMemo, useState } from 'react'
import { useQuery } from 'react-query'

import { photosApi, PhotosApiResponse, mapPhotos, PhotoItem } from '@lib'
import { Header } from '@components/header'

interface TileItemProps extends Partial<PhotoItem> {
  greyScale?: boolean
}

const TileItem = memo<TileItemProps>(({ name, greyScale, images }: TileItemProps) => (
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

export const Gallery = memo(() => {
  const [checked, setChecked] = useState<boolean>(false)
  const toggleGrayScale = useCallback(() => setChecked((checked) => !checked), [])

  const {
    data: photos,
    isLoading,
    isRefetching,
    refetch: refetchPhotos,
  } = useQuery<PhotosApiResponse>(photosApi.name, photosApi.fetcher, {
    refetchOnWindowFocus: false,
  })

  const mappedPhotos = useMemo(() => photos && mapPhotos(photos), [photos])

  const handleRefetch = useCallback(() => refetchPhotos(), [refetchPhotos])

  return (
    <div className='w-screen max-w-[750px] self-center px-4 md:px-0'>
      <Header checked={checked} toggleGrayScale={toggleGrayScale} onRefetch={handleRefetch} />
      {isLoading ? (
        <div className='py-20 text-center'>Loading ...</div>
      ) : (
        <div className='flex flex-col items-center'>
          <div className={`${isRefetching ? 'opacity-100' : 'opacity-0'} py-2`}>Loading new photos ...</div>
          <div className='grid sm:grid-cols-2 sm:grid-flow-row gap-4 w-full'>
            {mappedPhotos?.map(({ id, name, images }) => (
              <TileItem key={id} name={name} greyScale={checked} images={images} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
})

Gallery.displayName = 'Gallery'
