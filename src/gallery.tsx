import React, { memo, useCallback, useMemo, useState } from 'react'
import { useQuery } from 'react-query'

import { photosApi, PhotosApiResponse, mapPhotos } from '@lib'
import { Header, TileGallery } from '@components'

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

  const mappedPhotos = useMemo(() => (photos ? mapPhotos(photos) : []), [photos])

  const handleRefetch = useCallback(() => refetchPhotos(), [refetchPhotos])

  return (
    <div className='w-screen max-w-[750px] self-center px-4 md:px-0'>
      <Header checked={checked} toggleGrayScale={toggleGrayScale} onRefetch={handleRefetch} />
      <TileGallery photos={mappedPhotos} checked={checked} isLoading={isLoading} isRefetching={isRefetching} />
    </div>
  )
})

Gallery.displayName = 'Gallery'
