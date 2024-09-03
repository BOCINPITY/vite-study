import {defineConfig} from "vite"

export default defineConfig({
    server: { // 配置开发服务器
        proxy: { // 配置跨域解决方案
            "/api": {
                target: "https://www.360.com",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, "")
            },
        }
    },
})