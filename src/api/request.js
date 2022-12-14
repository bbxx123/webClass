/*
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-21 09:42:29
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-10-17 14:40:35
 * @FilePath: \Vue-Second-dimensional-personal-blog\src\api\request.js
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
 */
import axios from "axios";

const server = axios.create({
    baseURL: "http://127.0.0.1:3000/chai",
    responseType: "json",
    timeout: 60000
})
//请求拦截器
server.interceptors.response.use(resp => {
    return Promise.resolve(resp);
});
export default server;