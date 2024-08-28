// vite环境配置
import {defineConfig, loadEnv} from 'vite'
import viteDevConfig from "./vite.dev.config";
import viteProdConfig from "./vite.prod.config";
import viteBaseConfig from "./vite.base.config";

const envResovle = {
    "build": () => {
        // console.log("生产环境")
        return {...viteBaseConfig, ...viteProdConfig}
    },
    "serve": () => {
        // console.log("开发环境")
        return {...viteBaseConfig, ...viteDevConfig}
    },
}

export default defineConfig(({command, mode}) => {
    // 当我们调用loadEnv()时，vite会自动读取项目根目录中的.env文件，并将其解析为一个对象
    // 然后会将mode参数传递给loadEnv()，以便我们可以根据当前的环境变量来加载不同的配置
    const env = loadEnv(mode, process.cwd(), "")
    // console.log(env)
    return envResovle[command]()
})

