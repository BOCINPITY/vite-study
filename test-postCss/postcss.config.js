/*
* 类似全屋净水系统的过滤器
* 预设环境里面会包含很多环境
* 语法降级 ————> post-low-level
* 编译插件 ————> postcss-compiler
* 预设就是帮我们一次性的把这些必要的插件都给我们安装好了
* 语法编译：less、sass(语法嵌套 函数 变量)
* */
const postcssPresetEnv = require('postcss-preset-env');

const cssnano = require('cssnano');

module.exports = {
    plugins: [
        postcssPresetEnv(), // 预设环境
        cssnano(), // 压缩css
    ]
}