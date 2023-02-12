import { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'

import Home from './pokemon/ui/views/Home'

export default function App() {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return <Home />
}
