import React from 'react';
import { User } from './search-panel';

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  orgnization: string;
}
interface ListProps {
  list: Project[];
  users: User[];
}
export const List = ({ users, list }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map(project => (
            <tr key={project.id}>
              <td>{project.name}</td>
              {/* 防止 users.find返回 undefined,所以使用?.*/}
              <td>{users.find(user => user.id === project.personId)?.name || "未知"}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}