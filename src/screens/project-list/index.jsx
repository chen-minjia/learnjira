import { useState, useEffect } from "react";
import { SearchPanel } from "./search-panel"
import { List } from "./list"

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [list, setList] = useState([]);

  // 当param改变时(用户输入关键词，或选择下拉框时)，获取列表接口
  useEffect(() => {
    // fetch 返回的是一个 Promise 对象
    fetch('http://localhost:3001/projects').then(async response => {
      if (response.ok) { // 如请求成功，response.ok 的值为 true
        setList(await response.json());
      }
    })
  }, [param])

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} />
      <List list={list} />
    </div>
  )
}