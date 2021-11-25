# React Card Rotate Swiper
a react to search JS keyward using keyboard

## Demo





## Installation

```
npm i react-auto-complete-text
```

## Usage
```
import AutoCompleteText from "./AutoCompleteTest";
import "./App.css";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AutoCompleteText />
      </div>
    );
  }
}

export default App;
```

## Props

### 1. item
- JS keyward

This prop means Javascript Keyward array

### 2. onTextChanged
- value
- regex

text input value is use expression and express state

### 3. suggestionSelected
- setState

input value insert state

### 4. renderSuggestions
- suggestions
- map

selected value is mouse click and Auto complete
