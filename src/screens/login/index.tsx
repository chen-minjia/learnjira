import React, { FormEvent } from "react";

const apiUrl = process.env.REACT_APP_API_URL
export const LoginScreen = () => {
  const login = (param: { username: string, password: string }) => {
    fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(param)
    }).then(
      async (response: Response) => {
        if (response.ok) {

        }
      }
    )
  }
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 阻止表单提交的默认行为
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  }
  return (<form onSubmit={handleSubmit}>
    {/* onsubmit 类型声明： 
    (property) React.DOMAttributes<HTMLFormElement>.onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined */}
    <div>
      <label htmlFor="username">用户名</label>
      <input type="text" id="username" />
    </div>
    <div>
      <label htmlFor="password">密码</label>
      <input type="password" id="password" />
    </div>
    <button type={"submit"}>登录</button>
  </form>)
}