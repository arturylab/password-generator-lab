import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { Icon, LockIcon, MoonIcon, SunIcon } from '@/components/ui/icon';
import '@/global.css';
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

export default function RootLayout() {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

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
            headerTitleAlign: 'left',
            headerLeft: () => (
              <Icon size={'xl'} className={`ml-4 ${colorMode === 'dark' ? 'white' : 'black'}`} as={LockIcon} />
            ),
            headerRight: () => (
              <TouchableOpacity onPress={toggleColorMode}>
                <Icon size={'xl'} as={colorMode === 'light' ? SunIcon : MoonIcon} className='mr-4' />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
      
      {/* Footer */}
      {/* <View style={{ 
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        right: 0,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: 'transparent'
      }}>
        <Text 
          size="xs" 
          className="text-center text-gray-500"
        >
          © 2025 arturylab. All rights reserved.
        </Text>
      </View> */}
    </GluestackUIProvider>
  );
}