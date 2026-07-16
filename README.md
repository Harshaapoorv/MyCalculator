
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
    - Display values of current and previous operands
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

## 📦 APK Download

You can download and try the Android APK here:

👉 [Download Calculator APK](https://drive.google.com/file/d/1QHhyvshX5xmTphb13ZRGRW4wGOLfOvVD/view?usp=drive_link)

> Note: APKs for all my projects are organized in a central Google Drive folder for easy access.

All my project APKs are available here:

👉 [All Project APKs](https://drive.google.com/drive/u/0/folders/11-XnLyt-24zsK9xtEJG7H9fIqq42SGFh)

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
