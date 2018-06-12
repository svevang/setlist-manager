const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = function(env){
    return {
        mode: 'production',
        devtool: env === "production" ? "source-map": "inline-cheap-module-source-map",
        target: env === "test" ? "node" : "web",
        devServer: {
            contentBase: './dist'
        },
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                // '@': resolve('src'), 
            }
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader", // creates style nodes from JS strings
                        "css-loader", // translates CSS into CommonJS
                        "sass-loader" // compiles Sass to CSS
                    ]
                }
            ],
        },
        plugins: [
            new VueLoaderPlugin()
        ],
    }
};
