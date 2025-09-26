import { Box } from '@/components/ui/box';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Center } from '@/components/ui/center';
import { HStack } from '@/components/ui/hstack';
import { CopyIcon, RepeatIcon } from '@/components/ui/icon';
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { ScrollView } from "react-native";

export default function Index() {
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
      <Box className='flex justify-center items-center max-h-32 max-w-md mb-8 p-2'>
        <Text size={"2xl"} bold={"true"} className='text-center text-[#4DE3AF]'>
          {`df9KE}VHWe,S{q}vD:btu%JLyT9OzVHzDo^B)GhyqX<Yg@H@@KFgQE:4SR;Bi:+<`}
        </Text>
      </Box>
      
      <Box className="w-full max-w-sm">
        <VStack>
          <HStack className='flex justify-between items-center my-3'>
            <Text size={"lg"}>Lowercase</Text>
            <Switch
              size="md"
              trackColor={{ false: '#d4d4d4', true: '#4DE3AF' }}
            />
          </HStack>
          <HStack className='flex justify-between items-center my-3'>
            <Text size={"lg"}>Uppercase</Text>
            <Switch
              size="md"
              trackColor={{ false: '#d4d4d4', true: '#4DE3AF' }}
            />
          </HStack>
          <HStack className='flex justify-between items-center my-3'>
            <Text size={"lg"}>Numbers</Text>
            <Switch
              size="md"
              trackColor={{ false: '#d4d4d4', true: '#4DE3AF' }}
            />
          </HStack>
          <HStack className='flex justify-between items-center my-3'>
            <Text size={"lg"}>Symbols</Text>
            <Switch
              size="md"
              trackColor={{ false: '#d4d4d4', true: '#4DE3AF' }}
            />
          </HStack>
        </VStack>
        
        <Center className="h-[100px] my-4">
          <Text size={"lg"} className='mb-4'>Password length:</Text>
          <Text size={"4xl"} bold='true' className='mb-4 text-[#4DE3AF]'>16</Text>
          <Slider
            defaultValue={16}
            size="lg"
            orientation="horizontal"
            minValue={4}
            maxValue={64}
            className="w-full mb-4"
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Center>

        <VStack>
          <Button variant="solid" size="lg" action="primary" className='my-2'>
            <ButtonIcon as={RepeatIcon} />
            <ButtonText>Generate</ButtonText>
          </Button>
          <Button variant="outline" size="lg" action="primary" className='my-2'>
            <ButtonIcon as={CopyIcon} />
            <ButtonText>Copy</ButtonText>
          </Button>
        </VStack>
      </Box>
    </ScrollView>
  );
}