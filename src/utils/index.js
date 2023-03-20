export const isFalse = (val) => val === 0 ? false : !val; // !! 表示把一个值转换为布尔值
// 用来处理空值的函数
export const cleanObject = (obj) => {
  // 拷贝obj，不在原对象上进行修改。
  const result = { ...obj }; // Object.assign({}, object)
  Object.keys(obj).forEach(key => {
    const value = result[key];
    if (isFalse(value)) { // 排除 value 为 0 的情况被误删
      // if (!value && value !=0) { // 如果 value 为空、undefined、false ...
      delete result[key];
    }
  })
  return result;
}