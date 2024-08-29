// aliasResolver.js

module.exports = function (aliasConf, jsContent) {
    const entries = Object.entries(aliasConf);
    let lastContent = jsContent;
    entries.forEach((entry) => {
        const [alia, aliasPath] = entry;
        /*
        * 这个地方实际上要做一个相对路径的转换，
        * 这里只是为了演示，所以直接替换了,
        * 这里只针对的是windows系统，mac和linux系统的路径分隔符是"/"。
        * */
        const srcIndex = aliasPath.indexOf("\\src");
        const realPath = aliasPath.slice(srcIndex, aliasPath.length);
        lastContent = lastContent.replace(alia, realPath.replace(/\\/g, "/"));
    });
    return lastContent;
};