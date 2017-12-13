require('shelljs/global')
const config = require('../config')
const webpack = require('webpack')
const fs = require('fs')
const { resolve } =require('path')
const _ = require('lodash')
const webpackConf = require('./webpack.conf')
const assetsPath = config.assetsPath
const r = url => resolve(process.cwd(),url)
rm('-rf',assetsPath)
mkdir(assetsPath)
const renderConf = webpackConf
const entry = () => _.reduce(config.json.pages,(en,i) =>{ 
    
    en[i] = resolve(__dirname,'../',`${i}.mina`)
    console.log(en)
    return en
},{})
renderConf.output = {
    path: config.assetsPath,
    filename: '[name].js'
}
renderConf.entry = entry()
renderConf.entry.app = config.app
fs.writeFileSync(resolve(config.assetsPath,'./app.json'),JSON.stringify(config.json),'utf8')
const compiler = webpack(renderConf)
compiler.watch({},(err,stats) => {
    if(err){
        process.stdout.write(err)
    }
    console.log('[webpack:build]',stats.toString({
        chunks:false,
        colors:true
    }))
})