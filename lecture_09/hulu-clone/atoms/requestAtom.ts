'uce client'
import { API_KEY } from '@/utils/requests'
import { atom } from 'recoil'

export const requestURL = atom({
  key: 'requestURL',
  default: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
})
