import { NativeBaseProvider, StatusBar } from 'native-base'
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';

import { Loading } from './src/components/Loading';
import { SignIn } from './src/screens/SignIn'
import { Home } from './src/screens/Home'

import { THEME} from './src/styles/theme'

export default function App() {
  let [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {/* { fontsLoaded ? <SignIn /> : <Loading /> } */}
      { fontsLoaded ? <Home /> : <Loading /> }
    </NativeBaseProvider>
  )
}