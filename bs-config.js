module.exports = {
  port: process.env.PORT || 80,
  files: ['.src/**/*.{html,htm,css,js}'],
  server:{
    baseDir: ["./src", "./build/contracts"]
  }};