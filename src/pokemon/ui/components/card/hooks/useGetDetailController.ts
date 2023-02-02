import { useEffect, useState } from 'react'
import ImageColors from 'react-native-image-colors'

export function useGetDetailController(image: string) {
  const [bgColor, setBgColor] = useState('white')

  useEffect(() => {
    ImageColors.getColors(image, { fallback: 'white' }).then(colors => {
      if (colors.platform === 'android') {
        setBgColor(colors.dominant || 'white')
      } else if (colors.platform === 'ios') {
        setBgColor(colors.primary || 'white')
      }
    })
  }, [image])

  return { bgColor }
}
