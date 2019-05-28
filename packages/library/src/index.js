import React from 'react';
import { render } from "react-dom";
import { TextInput, MyMaterialComponent } from "./lib";
import {theme} from "./theme";
import { ThemeProvider } from '@material-ui/styles';
const App = () => (

  <ThemeProvider theme={theme}>
    <TextInput label="Email Address" placeholder="name@example.com" />

<MyMaterialComponent/></ThemeProvider>

);

render(<App />, document.getElementById("root"));
