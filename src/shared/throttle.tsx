// 动第一次 然后在一段时间不准动了 welcome.tsx 那个 watchEffect console.log(1) 会无限触发
//这个函数就是希望一个时间段只调用一次  其实也就是一次滑动调用一次
export const throttle = (fn:Function,time:number)=>{
    let timer : number | undefined = undefined   //类型  number | undefined  一开始是undefined
    return (...args:any[])=>{
        if(timer){
            return // 如果调用过直接返回
        }else{
            fn(...args)
            timer = setTimeout(()=>{   // 一段时间 将timer 重置 可以继续运行
                timer = undefined
            },time)
        }
    }
}

