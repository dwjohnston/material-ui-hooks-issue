const {
    override,
    addWebpackAlias,
  } = require("customize-cra");

const path = require('path'); 

module.exports = override( 
    addWebpackAlias({
        react: path.resolve('./node_modules/react'), 
        //comment out the line below and the theme will stop going through to the component library
        "@material-ui/styles": path.resolve("./node_modules/@material-ui/styles")
    })
)