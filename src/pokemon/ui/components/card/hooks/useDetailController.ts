import { useEffect, useRef, useState } from 'react'
import ImageColors from 'react-native-image-colors'

export function useDetailController(pokemonImage: string) {
  const [bgColor, setBgColor] = useState({ light: 'white', dark: 'white' })

  const isMounted = useRef(true)

  useEffect(() => {
    if (isMounted) {
      ImageColors.getColors(pokemonImage, { fallback: 'white' }).then(colors => {
        if (!isMounted.current) return

        if (colors.platform === 'android') {
          setBgColor({ light: colors.lightMuted || 'white', dark: colors.dominant || 'white' })
        }
      })
    }

    return () => {
      isMounted.current = false
    }
  }, [pokemonImage])

  const colors = [bgColor.dark, bgColor.light, 'white']

  return { colors }
}
