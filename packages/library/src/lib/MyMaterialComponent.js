import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import Card from "@material-ui/core/Card";
const useStyles = makeStyles(theme => {
    console.log(theme); 
    return {
    root: {
        //color: theme.palette.primary.main
    }
    }});

export function MyMaterialComponent({ }) {
     const classes = useStyles();   //Does't matter if we don't use it. 
    const theme =  useTheme();
    console.log(theme);
    return (
    
    <Card>
        <span className = {classes.root}>This is some component</span>
    </Card>
        );

}



