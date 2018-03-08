let gulp = require("gulp");
let webpack = require("webpack-stream");

gulp.task("webpack", function () {
    return gulp.src("resources/bootstrap.js")
        .pipe(webpack({
            module: {
                rules: [
                    {
                        test: /\.vue$/,
                        exclude: /(node_modules|bower_components)/,
                        
                        loader: 'vue-loader',
                        options: {
                        //   extractCSS: true
                        }
                      },
                    // {
                    //     test: /\.vue$/,
                    //     exclude: /(node_modules|bower_components)/,
                    //     use: {
                    //         loader: 'vue-loader',                          
                    //     }
                    // },
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/
                    }
                ]
            },
            output: {
                filename: 'app.js'
            },
            resolve: {
                alias: {
                  'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
                }
              }
        }))
        .pipe(gulp.dest("./public/js"));
});

gulp.task('default', function () {
    return gulp.watch(
        [
            './resources/*.js',
            './resources/components/*.js',
        ],
        [
            'webpack'
        ]);
});