import { Box } from '@/components/ui/box';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Center } from '@/components/ui/center';
import { HStack } from '@/components/ui/hstack';
import { CheckIcon, CopyIcon, RepeatIcon } from '@/components/ui/icon';
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import * as Clipboard from 'expo-clipboard';
import { useCallback, useEffect, useState } from "react";
import { ScrollView } from "react-native";

export default function Index() {
  // Password configuration state
  const [length, setLength] = useState<number>(16);
  const [includeLower, setIncludeLower] = useState<boolean>(true);
  const [includeUpper, setIncludeUpper] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  
  // UI state
  const [password, setPassword] = useState<string>("df9KE}VHWe,S{q}vD:btu%JLyT9OzVHzDo^B)GhyqX<Yg@H@@KFgQE:4SR;Bi:+<");
  const [copied, setCopied] = useState<boolean>(false);

  const generatePassword = useCallback(() => {
    // Character sets for password generation
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    // Build character pool based on user preferences
    let chars = "";
    if (includeLower) chars += lowerChars;
    if (includeUpper) chars += upperChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;

    if (!chars) return;

    let generated = "";

    // Ensure at least one character from each selected type
    if (includeLower) {
      const randomIndex = Math.floor(Math.random() * lowerChars.length);
      generated += lowerChars[randomIndex];
    }
    if (includeUpper) {
      const randomIndex = Math.floor(Math.random() * upperChars.length);
      generated += upperChars[randomIndex];
    }
    if (includeNumbers) {
      const randomIndex = Math.floor(Math.random() * numberChars.length);
      generated += numberChars[randomIndex];
    }
    if (includeSymbols) {
      const randomIndex = Math.floor(Math.random() * symbolChars.length);
      generated += symbolChars[randomIndex];
    }

    // Fill remaining length with random characters
    for (let i = generated.length; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generated += chars[randomIndex];
    }

    // Shuffle the password to randomize character positions
    const arr = generated.split('');
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    setPassword(arr.join(''));
  }, [length, includeLower, includeUpper, includeNumbers, includeSymbols]);

  const copyToClipboard = async () => {
    if (!password) return;
    
    try {
      await Clipboard.setStringAsync(password);
      setCopied(true);
      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log('Error copying to clipboard:', error);
    }
  };

  const handleSwitchChange = (type: 'lower' | 'upper' | 'numbers' | 'symbols', value: boolean) => {
    // Count currently active switches
    const activeCount = [includeLower, includeUpper, includeNumbers, includeSymbols].filter(Boolean).length;
    
    // Prevent disabling the last active switch
    if (activeCount === 1 && !value) {
      return;
    }
    
    // Update corresponding state
    switch (type) {
      case 'lower':
        setIncludeLower(value);
        break;
      case 'upper':
        setIncludeUpper(value);
        break;
      case 'numbers':
        setIncludeNumbers(value);
        break;
      case 'symbols':
        setIncludeSymbols(value);
        break;
    }
  };

  const handleSliderChange = (value: number) => {
    setLength(value);
  };

  // Auto-generate password when configuration changes
  useEffect(() => {
    generatePassword();
  }, [length, includeLower, includeUpper, includeNumbers, includeSymbols, generatePassword]);

  return (
    <ScrollView 
      style={{ flex: 1 }}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 40,
        paddingBottom: 40,
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* Password display container with fixed height */}
      <Box className='flex justify-center items-center h-32 w-full max-w-md mb-8 p-2'>
        <Text size={"4xl"} className='text-center text-[#4DE3AF] break-all'>
          {password}
        </Text>
      </Box>
      
      <Box className="w-full max-w-sm">
        {/* Character type toggles */}
        <VStack>
          <HStack className='flex justify-between items-center my-3'>
            <Text size={"lg"}>Lowercase</Text>
            <Switch
              size="md"
              value={includeLower}
              onValueChange={(value) => handleSwitchChange('lower', value)}
              trackColor={{ false: '#d4d4d4', true: '#4DE3AF' }}
            />
          </HStack>
          <HStack className='flex justify-between items-center my-3'>
            <Text size={"lg"}>Uppercase</Text>
            <Switch
              size="md"
              value={includeUpper}
              onValueChange={(value) => handleSwitchChange('upper', value)}
              trackColor={{ false: '#d4d4d4', true: '#4DE3AF' }}
            />
          </HStack>
          <HStack className='flex justify-between items-center my-3'>
            <Text size={"lg"}>Numbers</Text>
            <Switch
              size="md"
              value={includeNumbers}
              onValueChange={(value) => handleSwitchChange('numbers', value)}
              trackColor={{ false: '#d4d4d4', true: '#4DE3AF' }}
            />
          </HStack>
          <HStack className='flex justify-between items-center my-3'>
            <Text size={"lg"}>Symbols</Text>
            <Switch
              size="md"
              value={includeSymbols}
              onValueChange={(value) => handleSwitchChange('symbols', value)}
              trackColor={{ false: '#d4d4d4', true: '#4DE3AF' }}
            />
          </HStack>
        </VStack>
        
        {/* Password length control */}
        <Center className="h-[100px] my-4">
          <Text size={"lg"} className='mb-4'>Password length:</Text>
          <Text size={"4xl"} className='mb-4 text-[#4DE3AF]'>{length}</Text>
          <Slider
            value={length}
            onChange={handleSliderChange}
            size="lg"
            orientation="horizontal"
            minValue={4}
            maxValue={32}
            className="w-full mb-4"
            step={1}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Center>

        {/* Action buttons */}
        <VStack>
          <Button 
            variant="solid" 
            size="lg" 
            action="primary" 
            className='my-2'
            onPress={generatePassword}
          >
            <ButtonIcon as={RepeatIcon} />
            <ButtonText>Generate</ButtonText>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            action="primary" 
            className='my-2'
            onPress={copyToClipboard}
          >
            <ButtonIcon as={copied ? CheckIcon : CopyIcon} />
            <ButtonText>{copied ? "Copied" : "Copy"}</ButtonText>
          </Button>
        </VStack>
      </Box>
    </ScrollView>
  );
}