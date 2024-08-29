// index.js
const Koa = require('koa');
const fs = require('fs');
const path = require('path');

const viteConfig = require("./vite.config");
const aliasResolver = require("./utils/aliasResolver");

const app = new Koa();

app.use(async (ctx) => {
    if (ctx.request.url === '/') {
        ctx.response.body = await fs.promises.readFile(path.resolve(__dirname, './index.html'));
        ctx.response.set('Content-Type', 'text/html');
    }
    if (ctx.request.url.endsWith('.js')) {
        const filePath = path.resolve(__dirname, "." + ctx.request.url);
        const jsContent = await fs.promises.readFile(filePath);
        ctx.response.body = aliasResolver(viteConfig.resolve.alias, jsContent.toString());
        ctx.response.set('Content-Type', 'text/javascript');
    }
});

app.listen(5173, () => {
    console.log('vite-dev-server is running at http://localhost:5173');
});