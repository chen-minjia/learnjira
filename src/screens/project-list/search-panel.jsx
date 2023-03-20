import React from 'react';
import { useState, useEffect } from "react";

export const SearchPanel = ({ param, setParam }) => {
  const [users, setUsers] = useState([]);// users 为负责人列表

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
          users.map(user => <option value={user.id}>{user.name}</option>)
        }
      </select>
    </div>
  </form>
}