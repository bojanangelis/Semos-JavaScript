import React, { useState } from 'react'
import Input from './Input'

export const Login = () => {
  //  state username
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const changeVisabilityPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleOnChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  // imame edna input componenta kade shto treba da vnesime
  // edno custum kopce da go napravi cell userName vo golemi bukvi

  return (
    <div>
      <Input
        placeholder={'Enter you gmail'}
        type='email'
        value={email}
        onChange={(e) => handleEmail(e)}
      />
      <Input
        type='text'
        placeholder='Enter your Username'
        value={username}
        onChange={(e) => handleOnChangeUsername(e)}
        // setState ne treba da pushtame vo props
        // podobro e funkcija.
        // setUsername(e.target.value)
      />

      <Input
        type={showPassword ? 'text' : 'password'}
        name='password'
        placeholder='Enter Password'
        setShowPassword={changeVisabilityPassword}
        showPassword={showPassword}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
    </div>
  )
}
