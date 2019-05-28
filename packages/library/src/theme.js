import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({  //Import from ./theme


    typography: {
        h1: {
            fontSize: "3rem",
        },
        h2: {
            fontSize: "2rem",
        }, 
        h3: {
            fontSize: "1.5rem", 
        }
    }
});