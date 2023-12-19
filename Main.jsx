// import * as React from "react";
// import {
//   MD3LightTheme as DefaultTheme,
//   PaperProvider,
// } from "react-native-paper";

// import App from "./App";

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: "tomato",
//     secondary: "yellow",
//   },
// };


// export default function Main() {
//   return (
//     <PaperProvider theme={theme}>
//       <App />
//     </PaperProvider>
//   );
// }

 import React from 'react';
import { PaperProvider } from 'react-native-paper';
import App from './App';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "white",
    secondary: "white",
    
  },
};

    export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}