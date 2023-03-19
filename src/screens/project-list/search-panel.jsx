import { useState, useEffect } from "react";

export const SearchPanel = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [users, setUsers] = useState([]);// users 为负责人列表
  const [list, setList] = useState([]);

  // 当param改变时(用户输入关键词，或选择下拉框时)，获取列表接口
  useEffect(() => {
    // fetch 返回的是一个 Promise 对象
    fetch('').then(async response => {
      if (response.ok) { // 如请求成功，response.ok 的值为 true
        setList(await response.json());
      }
    })
  }, [param])

  return <form>
    <div>
      {/* setParam(Object.assign({},param,{name:evt.target.value})) */}
      <input type="text" value={param.name} onChange={evt => setParam({
        ...param,
        name: evt.target.value
      })} />
      <select value={param.personId} onChange={evt => setParam({
        ...param,
        personId: evt.target.value
      })}>
        <option value="">负责人</option>
        {
          // 这里可能有一点问题
          users.map(user => <option value={user.name}>{user.name}</option>)
        }
      </select>
    </div>
  </form>
}