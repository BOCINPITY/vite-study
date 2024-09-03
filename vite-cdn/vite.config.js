import {defineConfig} from "vite"
import CDNs from 'vite-plugin-cdn-import';

export default defineConfig({
    plugins:[
        CDNs({
            modules:[{
                name:'lodash',
                var:'_',
                path:'https://fastly.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'
            }]
        }),
    ]
})