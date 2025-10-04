import About from "@/app/about";
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { Icon, InfoIcon, MoonIcon, SunIcon } from '@/components/ui/icon';
import '@/global.css';
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function RootLayout() {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');
  const [showAbout, setShowAbout] = useState(false);

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  const handleAboutPress = () => {
    setShowAbout(true);
  };

  const handleAboutClose = () => {
    setShowAbout(false);
  };

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hide();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <GluestackUIProvider mode={colorMode}>
        <StatusBar style={colorMode === 'dark' ? 'light' : 'dark'} />
        <Stack screenOptions={{ 
          headerStyle: { backgroundColor: '#4DE3AF' },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: colorMode === 'dark' ? 'light' : 'dark',
          },
          contentStyle: { 
            backgroundColor: colorMode === 'dark' ? 'black' : 'white' 
          }
        }}>
          <Stack.Screen
            name="index"
            options={{
              title: "Password Generator Lab",
              headerTitleAlign: 'center',
              headerLeft: () => (
                <TouchableOpacity onPress={toggleColorMode} className='ml-4'>
                  <Icon size={'xl'} as={colorMode === 'light' ? SunIcon : MoonIcon} className='mr-4' />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity onPress={handleAboutPress} className='mr-4'>
                  <Icon size={'xl'} as={InfoIcon} className='ml-4' />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack>
        
        <About isOpen={showAbout} onClose={handleAboutClose} />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}