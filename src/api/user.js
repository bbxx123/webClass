/*
 * @Author: fengyuanyao fengyuanyao@fanyu.com
 * @Date: 2022-10-17 14:29:03
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-10-17 14:29:08
 * @FilePath: \Vue-Second-dimensional-personal-blog\src\api\user.js
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
 */
import axios from "axios";
import serve from "./request"

export function Login() {
    return serve({
        url: '/search',
        method: 'get',
    })
}