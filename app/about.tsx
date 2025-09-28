import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import {
    Drawer,
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
} from '@/components/ui/drawer';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

interface AboutProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function About({ isOpen = false, onClose }: AboutProps) {
  return (
    <Drawer
      isOpen={isOpen}
      size="lg"
      anchor="bottom"
      onClose={onClose}
    >
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerHeader>
          <Heading size="lg" className='text-[#4DE3AF]'>About Password Generator</Heading>
          <DrawerCloseButton>
          </DrawerCloseButton>
        </DrawerHeader>
        <DrawerBody>
          <VStack space="lg">
                <Box>
                    <Heading size="sm">How does it work?</Heading>
                    <Text className='text-justify'>
                        This app generates secure passwords directly on your device.
                        Your data is not stored, collected, or shared. Your privacy is our priority.
                    </Text>
                </Box>
                 <Box>
                    <Heading size="sm">Privacy Policy</Heading>
                    <Text className='text-justify'>
                        Our application is designed with your privacy as our top priority. We do not collect, store, or transmit any personal information.
                        All passwords are generated and processed exclusively on your device. Once a password is generated, it is your responsibility to store it in a secure location. The application does not keep a record of the passwords created.
                    </Text>
                </Box>
                <Box>
                    <Heading size="sm">Contact</Heading>
                    <VStack>
                        <Text className='text-justify'>
                            Your opinion is very important! Help me make this tool even better. Write to me at:
                        </Text>
                        <Text size="lg" bold="true" className='text-center text-[#4DE3AF] m-2'>
                            arturylab@gmail.com
                        </Text>
                    </VStack>
                </Box>
                <Button
                    onPress={onClose}
                    className='mt-8'
                >
                    <ButtonText>Close</ButtonText>
                </Button>
            </VStack>
        </DrawerBody>
        <DrawerFooter className='justify-center'>
            <VStack className='items-center'>
                <Text size="sm" bold="true" className='text-[#4DE3AF]'>Version 1.0.0</Text>
                <Text size="sm">© 2025 arturylab. All rights reserved.</Text>
            </VStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}