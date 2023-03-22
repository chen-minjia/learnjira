import qs from "qs";
// import * as qs from "qs";
import { useState, useEffect } from "react";
import { SearchPanel } from "./search-panel"
import { List } from "./list"
import { cleanObject, useDebounce, useMount } from "utils";

// process.env 动态获取环境变量 
const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);// users 为负责人列表
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [list, setList] = useState([]);

  const debounceParam = useDebounce(param, 2000); // 防抖

  // 当param改变时(用户输入关键词，或选择下拉框时)，获取列表接口
  useEffect(() => {
    // fetch 返回的是一个 Promise 对象
    // `${apiUrl}/projects?name=${param.name}&personId=${param.personId}`
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async response => {
      if (response.ok) { // 如请求成功，response.ok 的值为 true
        setList(await response.json());
      }
    })
    // }, [param])
  }, [debounceParam])



  // 初始化 users，依赖空数组，只需要在页面渲染时触发一次
  // useEffect(() => {
  //   fetch(`${apiUrl}/users`).then(async response => {
  //     if (response.ok) {
  //       setUsers(await response.json());
  //     }
  //   })
  // }, [])

  // 代码同上，防重复。
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json());
      }
    })
  });

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  )
}