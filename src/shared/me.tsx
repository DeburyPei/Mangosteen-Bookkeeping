import { AxiosResponse } from "axios";
import { http } from "./Http"

export let mePromise : Promise<AxiosResponse<{
    resource:{
        id:number
    }
}>> | undefined

export const refreshMe = () =>{
    mePromise = http.get<{resource:{id:number}}>('/me')  // 获取数据 {resource:{id:number}} 因为api返回这个类型
    return mePromise
}

export const fetchMe = refreshMe