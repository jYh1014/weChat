const { resolve } = require('path')
const r = url => resolve(__dirname,url)
const assetsPath = resolve(process.cwd(),'./dist')
module.exports = {
    "json":{
        "pages":[
            "pages/index/index",
            "pages/logs/logs"
          ],
          "tabBar":{
              "color":"#565656",
              "selectedColor":"#5aaca5",
              "list":[]
        }
    },    
    "window":{
      "backgroundTextStyle":"light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "WeChat",
      "navigationBarTextStyle":"black"
    },
    "assetsPath":assetsPath,//静态资源文件
    "app":r('./app.js')//入口文件
  }
  