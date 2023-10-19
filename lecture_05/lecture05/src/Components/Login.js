import React, { useState } from 'react'
import Input from './Input'

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [showPassword, setShowPassword ] = useState(false)

    const changeVisabilityPassword = () => {
      setShowPassword(!showPassword)
    }

  return (
    <div>
        <Input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        
        <Input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Enter Password"
          setShowPassword={changeVisabilityPassword}
          showPassword={showPassword}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

    </div>
  )
}
