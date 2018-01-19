module.exports = {
  js: {
    bundles: [{
      entryPoint: "./ts-dist/index.js",
      target: "./app.js"
    }],
    manifest: false
  },
  watchDirs: ["./ts-dist"]
};
