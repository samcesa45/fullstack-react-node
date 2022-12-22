import React from 'react'

interface Props {
  username: string
  password: string
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onLogin: (event: React.FormEvent<HTMLFormElement>) => void
}

const Login = ({ onLogin, username, password, onNameChange, onPasswordChange }: Props) => {
  return (
    <div className='px-16'>
      <form onSubmit={onLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            onChange={(event) => onNameChange(event)}
            className='border mb-4 ml-3 rounded p-1 outline-none focus:border-0 focus:ring focus:ring-blue-400'
            name='username'
            id='username'
            placeholder='Please Enter Username'
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => onPasswordChange(event)}
            className='border mb-4 ml-3 rounded p-1 outline-none focus:border-0 focus:ring focus:ring-blue-400'
            name='password'
            id='password'
            placeholder='Please Enter Password'
          />
        </div>
        <div>
          <button type='submit' id='login-button' className='px-2 py-1  rounded bg-blue-500 text-white'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
