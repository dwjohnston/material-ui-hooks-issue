import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MyMaterialComponent} from "library"; 
import ReactColorSquare from "react-color-square";
import { ThemeProvider } from '@material-ui/styles';
import {theme} from "./theme";

function App() {
  return (

  <ThemeProvider theme={theme}>

    <div className="App">
          <MyMaterialComponent/>

          <ReactColorSquare/>
    </div>

  </ThemeProvider>
  );
}

export default App;
