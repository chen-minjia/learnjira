import { useEffect, useState } from "react";

export const isFalse = (val: unknown): boolean => val === 0 ? false : !val; // !! 表示把一个值转换为布尔值
// 用来处理空值的函数
export const cleanObject = (obj: object) => {
  // 拷贝obj，不在原对象上进行修改。
  const result: object = { ...obj }; // Object.assign({}, object)
  Object.keys(obj).forEach(key => {
    // @ts-ignore
    const value = result[key];
    if (isFalse(value)) { // 排除 value 为 0 的情况被误删
      // if (!value && value !=0) { // 如果 value 为空、undefined、false ...
      // @ts-ignore
      delete result[key];
    }
  })
  return result;
}

// 组件只在挂载时渲染
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, [])
}

// const debounce = (fn, delay = 500) => {
//   let timer;
//   return (...params) => {
//     if (timer) {
//       clearTimeout(timer); // 节流throttle则是 return
//     }
//     timer = setTimeout(() => {
//       fn(...params);
//       // timer = null; // 节流需要执行结束后清空定时器
//     }, delay)
//   }
// }

// 防抖 
export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 每次 value 变化，设置一个定时器
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay)
    // 每次在上一个 useEffect处理完以后再运行
    // useEffect 中，return出来的回调函数在上一次useEffect运行完以后执行
    return () => clearTimeout(timer) // ComponentWillUnmount
  }, [value, delay])
  return debouncedValue;
}
