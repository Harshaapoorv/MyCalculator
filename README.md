
# 🧮 Simple Calculator App (React Native)

A clean and fully functional **Simple Calculator mobile application** built using **React Native CLI**.  
This project demonstrates strong fundamentals in state management, UI/UX design, theming, and scalable app architecture using custom hooks.

---

## ✨ Features

- ➕ Basic arithmetic operations:  
  - Addition  
  - Subtraction  
  - Multiplication  
  - Division  

- 🔁 Chained calculations (left-to-right evaluation)

- ⌫ Backspace functionality  
  - Remove last digit  
  - Safe handling for `0`, operators, and error state  

- 🧹 Clear (AC) button  
  - Resets calculator state completely  

- ❌ Division by zero handling  
  - Displays `Error`  
  - Proper recovery after error  

- 🔢 Decimal number support  
  - Prevents multiple decimals  
  - Smart handling like `.` → `0.`  

- 🎨 Light & Dark Theme  
  - System theme detection  
  - Manual theme toggle  
  - Professional UI design for both modes  

- 🧠 Clean architecture  
  - Logic isolated in a custom hook (`useCalculator`)  
  - UI components are pure and reusable  

---

## 📱 Screenshots

<img width="120" height="262" alt="Simulator Screenshot - iPhone 17 Pro - 2026-01-28 at 19 51 22" src="https://github.com/user-attachments/assets/2b6174a1-4972-4c14-b31e-5b748b3fec18" />
<img width="120" height="262" alt="Simulator Screenshot - iPhone 17 Pro - 2026-01-28 at 19 51 10" src="https://github.com/user-attachments/assets/37e96632-be66-41a4-833d-c3a6156c1fdd" />
<img width="120" height="262" alt="Simulator Screenshot - iPhone 17 Pro - 2026-01-28 at 19 51 02" src="https://github.com/user-attachments/assets/fcfe8206-7cd9-4a25-bb03-a01d1f2dfb0d" />
<img width="120" height="262" alt="Simulator Screenshot - iPhone 17 Pro - 2026-01-28 at 19 50 57" src="https://github.com/user-attachments/assets/5333542a-4314-4430-abb1-482ad2f5c087" />
<img width="120" height="262" alt="Simulator Screenshot - iPhone 17 Pro - 2026-01-28 at 19 50 53" src="https://github.com/user-attachments/assets/836002f9-f02d-4114-acd2-a92990ba532b" />
<img width="120" height="262" alt="Simulator Screenshot - iPhone 17 Pro - 2026-01-28 at 18 31 10" src="https://github.com/user-attachments/assets/2ed1baa1-c88a-4694-839b-e1b401ed0bd1" />
<img width="120" height="262" alt="Simulator Screenshot - iPhone 17 Pro - 2026-01-28 at 18 25 19" src="https://github.com/user-attachments/assets/84cea038-c4d2-4baa-a6fa-cbdc94ea33c3" />
<img width="120" height="262" alt="Simulator Screenshot - iPhone 17 Pro - 2026-01-28 at 18 25 11" src="https://github.com/user-attachments/assets/0bcc50f0-723d-406c-b189-a14d3a45894b" />

---



```

Light Theme      |      Dark Theme

```

---

## 🏗 Project Structure

```

src/
│
├── assets/
│   └── delete.svg
│   
├── components/
│   ├── Button.js
│   ├── Display.js
│   └── Keypad.js
│
├── hooks/
│   └── useCalculator.js
│
├── screens/
│   ├── CalculatorScreen.js
│   └── Main.js
│
├── store/
│   └── theme.context.js
│
└── App.tsx

````

---

## 🧩 Architecture Highlights

- **Custom Hook (`useCalculator`)**
  - Manages:
    - Display value
    - Operator
    - Operand state
    - Calculation flow
    - Backspace
    - Error handling
    - Reset logic

- **Theme Context**
  - Centralized theme state
  - Dynamic color switching
  - Easy extension for new themes

- **UI Layer**
  - Pure components
  - No business logic inside UI
  - Theme-aware styling

---

## 🧪 Test Coverage

All critical calculator behaviors have been tested:

| Category | Status |
|--------|------|
| Number input | ✅ |
| Decimal handling | ✅ |
| Basic operations | ✅ |
| Chained operations | ✅ |
| Operator replacement | ✅ |
| Equals behavior | ✅ |
| Backspace logic | ✅ |
| Clear (AC) logic | ✅ |
| Division by zero | ✅ |
| Error recovery | ✅ |
| Theme switching | ✅ |
| UI interaction | ✅ |

---

## 🎥 Demo

A Loom video demo is available showcasing:
- Light/Dark theme toggle
- Basic calculations
- Chained operations
- Backspace usage
- Error handling

*(Add your Loom link here)*

---

## 🚀 How to Run

1. Clone the repository:
```bash
git clone https://github.com/yourusername/simple-calculator-react-native.git
````

2. Install dependencies:

```bash
npm install
```

3. Run on Android:

```bash
npx react-native run-android
```

4. Run on iOS:

```bash
npx react-native run-ios
```

---

## 🛠 Built With

* React Native CLI
* JavaScript
* Context API (Theme management)
* Custom Hooks
* Android Studio / Xcode

---

## 🎯 Learning Outcomes

This project helped solidify:

* State machine based UI design
* Separation of concerns
* Clean component architecture
* Custom hooks design
* Theming systems
* Mobile UI polish
* Professional testing mindset

---

## 📌 Future Improvements (Optional)

* Repeated equals operation (`2 + 3 = = =`)
* Percentage (%) button
* Memory functions (M+, M-, MR)
* Animations for button press
* Accessibility improvements

---

## 🙌 Author

Built with ❤️ by **Harsha Apoorv**

---

This project is a foundation stone for more complex mobile apps and demonstrates real-world engineering practices in React Native.

```
```


- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:
