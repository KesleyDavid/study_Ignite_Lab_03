import { NativeBaseProvider } from 'native-base'
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';

import { SignIn } from './src/screens/SignIn'
import { Loading } from './src/components/Loading';

import { THEME} from './src/styles/theme'

export default function App() {
  let [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  return (
    <NativeBaseProvider theme={THEME}>
      { fontsLoaded ? <SignIn /> : <Loading /> }
    </NativeBaseProvider>
  )
}