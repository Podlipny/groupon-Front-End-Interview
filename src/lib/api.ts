import { QueryFunction, QueryKey } from 'react-query'

import { PhotosApiResponse } from '@lib'

interface ApiDefinition<T> {
  name: string
  fetcher: QueryFunction<T, QueryKey>
}

export const photosApi: ApiDefinition<PhotosApiResponse> = {
  name: 'photos',
  fetcher: async (): Promise<PhotosApiResponse> => {
    const response = await fetch('https://aukro.cz/backend/api/homepage', {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    return response?.json()
  },
}
