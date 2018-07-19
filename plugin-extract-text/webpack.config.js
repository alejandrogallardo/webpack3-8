const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
    home: path.resolve(__dirname, 'index.js'),
    precios: path.resolve(__dirname, 'precios.js'),
    contacto: path.resolve(__dirname, 'contacto.js')
    }, 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    //['style-loader', 'css-loader']
                    use: "css-loader"
                }),
            }
        ]
    },
    plugins: [
        //new ExtractTextPlugin("css/[name].css") esto genera otro achico con un nombre main.css
        new ExtractTextPlugin("css/styles.css") 
    ]
}