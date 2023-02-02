import { ImageColorsResult } from 'react-native-image-colors/lib/typescript/types'

export const mockGetColors = (): Promise<ImageColorsResult> => {
  return new Promise(res => {
    res({ platform: 'android' })
  })
}
