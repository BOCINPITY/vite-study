const path = require('path');

module.exports = {
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            // "@assets": path.resolve(__dirname, "./src/assets"),
        }
    }
}