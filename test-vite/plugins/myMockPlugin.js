const fs =  require('fs')
const path = require('path')

export default (options) => {
    // mock插件自定义
    return {
        configureServer: (server) => {
            const mockStat = fs.statSync("mock")
            let mockRes = []
            if(mockStat.isDirectory()){
                mockRes = require(path.resolve(process.cwd(),"mock/index.js"))

            }
            server.middlewares.use((req, res, next) => {
                const matchItem = mockRes.find((mockDescription) => mockDescription.url === req.url && mockDescription.method === req.method.toLowerCase())
                if (matchItem) {
                    res.setHeader('Content-Type', 'application/json')
                    // res.end("hello mockJS") // 需要的是mock的数据，不是这个hello mockJS
                    res.end(JSON.stringify(matchItem.response(req)))
                } else {
                    next()
                }
            })

        }

    }
}