# Password Generator Lab

A secure, privacy-focused password generator mobile application built with Expo and React Native.

## Features

- **Secure Password Generation**: Generate strong, random passwords directly on your device
- **Customizable Options**: 
  - Adjustable password length (4-32 characters)
  - Toggle lowercase letters (a-z)
  - Toggle uppercase letters (A-Z)
  - Toggle numbers (0-9)
  - Toggle symbols (!@#$%^&*()_+[]{}|;:,.<>?)
- **Dark Mode Support**: Switch between light and dark themes
- **One-Tap Copy**: Easily copy generated passwords to clipboard
- **Privacy First**: No data collection, storage, or transmission
- **Offline Functionality**: Works completely offline

## Screenshots

*[Add screenshots here]*

## Tech Stack

- **Framework**: Expo / React Native
- **UI Library**: Gluestack UI
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Navigation**: Expo Router
- **Language**: TypeScript

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/password-generator-lab.git
cd password-generator-lab
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npx expo start
```

4. Run on your device:
   - Install Expo Go app on your iOS or Android device
   - Scan the QR code from the terminal
   - Or press `i` for iOS simulator or `a` for Android emulator

## Project Structure

```
password-generator-lab/
├── app/
│   ├── _layout.tsx       # Root layout with navigation and theme
│   ├── index.tsx         # Main password generator screen
│   └── about.tsx         # About/Info drawer
├── components/
│   └── ui/              # Gluestack UI components
├── assets/
│   └── fonts/           # Custom fonts
└── global.css           # Global styles
```

## Usage

1. **Generate Password**: The app automatically generates a password on launch
2. **Customize**: Use the switches to enable/disable character types
3. **Adjust Length**: Use the slider to set password length (4-32 characters)
4. **Regenerate**: Tap the "Generate" button to create a new password
5. **Copy**: Tap the "Copy" button to copy the password to clipboard
6. **Toggle Theme**: Tap the sun/moon icon in the header to switch themes
7. **About**: Tap the info icon to view app information and privacy policy

## Security & Privacy

- All password generation happens locally on your device
- No passwords are stored, logged, or transmitted
- No analytics or tracking
- No internet connection required
- Open source and transparent

## Building for Production

### iOS

```bash
eas build --platform ios
```

### Android

```bash
eas build --platform android
```

*Note: Requires EAS CLI and account. See [Expo docs](https://docs.expo.dev/build/introduction/) for details.*

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

**Email**: arturylab@gmail.com

Your feedback and suggestions are highly appreciated!

## Acknowledgments

- Built with [Expo](https://expo.dev/)
- UI components by [Gluestack UI](https://ui.gluestack.io/)
- Icons from Lucide React

---

**Version**: 1.0.0  
**Copyright**: © 2025 arturylab. All rights reserved.