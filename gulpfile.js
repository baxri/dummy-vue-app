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
                        use: {
                            loader: 'vue-loader',                          
                        }
                    },
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/
                      },
                ]
            },
            output: {
                filename: 'app.js'
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