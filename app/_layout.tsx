import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { Icon, MoonIcon, SunIcon } from '@/components/ui/icon';
import '@/global.css';
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function RootLayout() {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
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
            title: "Password Generator",
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={toggleColorMode} className='ml-4'>
                <Icon size={'xl'} as={colorMode === 'light' ? SunIcon : MoonIcon} className='mr-4' />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
    </GluestackUIProvider>
  );
}