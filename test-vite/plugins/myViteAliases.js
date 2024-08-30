const fs = require('fs')
const path = require('path')

/**
 * @param {Array: String[]} dirFilesArray
 * @param {String: String} sourceBasePath
 * @returns {{dir: Array, file: Array}}
 * */


function diffDirAndFile(dirFilesArray = [], sourceBasePath) {
    const result = {
        dir: [],
        file: []
    }
    dirFilesArray.forEach(dirOrFileName => {
        // 判断是文件夹还是文件
        if (fs.statSync(path.resolve(sourceBasePath, dirOrFileName)).isDirectory()) {
            result.dir.push(dirOrFileName)
        } else {
            result.file.push(dirOrFileName)
        }
    })
    return result
}

function getTotalSrcDir() {
    const result = fs.readdirSync(path.resolve(__dirname, "../src"))
    const {dir, file} = diffDirAndFile(result, path.resolve(__dirname, "../src"))
    console.log(dir, file)
    let resolveObj = {}
    dir.forEach(dirItem => {
        //     做字符串的拼接
        const key = `@${dirItem}`
        const absPath = path.resolve(__dirname, `../src/${dirItem}`)
        resolveObj[key] = absPath
    })

    return resolveObj
}

module.exports = () => {
    return {
        /**
         * config钩子，在解析vite配置之前被调用。钩子函数的参数config, env接收到的是原始用户配置,和当前环境变量。
         * 最终会被vite深度合并到一起(把什么vite.base.config.js,vite.config.js合并到一起，类似Object.assign,但是记住是深度合并)作为当前环境的最终配置
         * 文档链接:https://cn.vitejs.dev/guide/api-plugin.html#config
         **/
        config: (config, env) => {
            const alias = getTotalSrcDir()
            console.log(alias)
            return {
                resolve: {
                    alias: alias,
                },
            }
        }
    }
}