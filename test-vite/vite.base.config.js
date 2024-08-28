// 基础配置
import {defineConfig} from 'vite'

export default defineConfig({
    optimizeDeps: {
        exclude: [],
    },
    // 环境变量前缀
    envPrefix: 'ENV_',
    // 对css的行为进行配置
    css: {
        modules: {
            localsConvention: "camelCaseOnly", // 修改生成的配置对象的key的展示形式，是中划线还是驼峰命名
            scopeBehaviour: "local", // 修改生成的类名的行为，是局部的还是全局的global代表关闭css模块化
            // generateScopedName:"[name]_[local]_[hash:5]", // 修改生成的类名的格式
            // 这个属性可以配置成函数，也可以配置成字符串规则
            // generateScopedName: (name, filename, css) =>{
            //     console.log("name",name,"filename",filename,"css",css)
            //     return `${name}_${Math.random().toString(36).substring(3,8)}`
            // }
            hashPrefix: "hello", // 生成的hash会根据css的类名 + 一些其他的字符串去生成hash串,这个配置会参与到hash生成算法中,简而言之提高hash的复杂度
            globalModulePaths: [], //代表不参与到css模块化的路径
        },
        preprocessorOptions: { // key + config key代表预处理器的名
            less: {
                math: "always", // 是否开启数学运算
                globalVars: {
                    primaryColor: "#1890ff",
                    successColor: "#52c41a",
                    warningColor: "#faad14",
                    errorColor: "#f5222d",
                    defaultColor: "#d9d9d9",
                }, // 全局变量
            }
        },
        devSourcemap: true //开启css的sourceMap(文件索引)
    }
})