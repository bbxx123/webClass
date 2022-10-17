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
export function Register(data) {
    return serve({
        url: '/add',
        method: 'post',
        data
    })
}

export function SearchIput() {
    return serve({
        url: '/searchinput',
        method: 'get',
    })
}

export function Addinput(data) {
    return serve({
        url: '/addinput',
        method: 'post',
        data
    })
}
export function Change(data) {
    return serve({
        url: '/change',
        method: 'post',
        data
    })
}
export function ChangeUser(data) {
    return serve({
        url: '/changeuser',
        method: 'post',
        data
    })
}
export function DelUser(data) {
    return serve({
        url: '/deluser',
        method: 'post',
        data
    })
}
export function DelInput(data) {
    return serve({
        url: '/delinput',
        method: 'post',
        data
    })
}