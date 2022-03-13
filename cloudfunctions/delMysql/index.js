// 云函数入口文件
const cloud = require('wx-server-sdk')
//引入mysql操作模块
const mysql = require('mysql2/promise')
cloud.init({
  env:"sign-3gpyujdw68423588"
})
// 云函数入口函数

exports.main = async(event, context) => {
  numbers = event.numbers;
  //链接mysql数据库的test库，这里你可以链接你mysql中的任意库
  try {
    // 连接数据库
    const connection = await mysql.createConnection({
      host: "124.222.84.158",
      database: "book1",
      user: "root",
      password: "root"
    })
    // 执行sql
    const [rows, fields] = await connection.execute("delete from book1 where author = '"+numbers+"' ")
    // 返回数据
    return rows;
  } catch (err) {
    console.log("链接错误", err)
    return err
  }
}