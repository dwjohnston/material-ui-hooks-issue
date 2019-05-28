import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from "@material-ui/core/Card";
const useStyles = makeStyles(theme => ({
    root: {

    },
}));

export function MyMaterialComponent({ }) {
     const classes = useStyles();   //Does't matter if we don't use it. 

    return (<Card>
        This is some component
    </Card>
        );

}



