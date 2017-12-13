const { resolve } = require('path')
const r = url => resolve(__dirname,url)
const assetsPath = resolve(process.cwd(),'./mina')
module.exports = {
    "json":{
        "pages":[
            "pages/index/index",
            "pages/logs/logs"
          ],
          "tabBar":{
              "color":"#565656",
              "selectedColor":"#5aaca5",
              "list":[{
                "iconPath": "static/home.png",
                "selectedIconPath": "static/home-selected.png",
                "pagePath": "page/index/index",
                "text": "家族脸谱"
              } ,
              {
                "iconPath": "static/user.png",
                "selectedIconPath": "static/user-selected.png",
                "pagePath": "page/logs/logs",
                "text": "我的账户"
              }                
              ]
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
  