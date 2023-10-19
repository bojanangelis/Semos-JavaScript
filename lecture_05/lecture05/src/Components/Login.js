import React, { useState } from 'react'
import Input from './Input'
import Dropdown from './Dropdown'

//HOMEWORK

// SignUP
// posebna komponenta inptu --> komponenta Ime, prezime, email,
// pol (dropdown). passwrod comfrm passowrd pol (singinprovider instragram
// facebook twitter)
// koga ke se najavi so signup -> da pishuva vie ste logirani.

export const Login = () => {
  const apps = [
    { value: 'Facebook', name: 'Facebook' },
    { value: 'Instagram', name: 'Instagram' },
    { value: 'Twitter', name: 'Twitter' },
  ]
  //apps
  const [selectedValue, setSelectedValue] = useState(apps[1])
  //  state username

  // pravam eden booelan
  const [isUpperCase, setIsUpperCase] = useState(false)

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

  const handleUpperCaseBoolean = () => {
    setIsUpperCase(!isUpperCase)
    const thisIsUpperCase = username.toUpperCase()
    const thisIsLowerCase = username.toLowerCase()
    // ova e flag
    //  znamence
    if (isUpperCase) {
      setUsername(username.toUpperCase())
    } else {
      setUsername(username.toLowerCase())
    }
  }
  // imame edna input componenta kade shto treba da vnesime
  // edno custum kopce da go napravi cell userName vo golemi bukvi

  //appss

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
        name={'username'}
        placeholder='Enter your Username'
        value={username}
        onChange={(e) => handleOnChangeUsername(e)}
        isUpperCase={isUpperCase}
        setIsUpperCase={handleUpperCaseBoolean}
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
      {/* dropdown componenta so niza na apps */}
      <Dropdown
        elements={apps}
        value={selectedValue}
        onChange={(e) => {
          setSelectedValue(e.target.value)
        }}
      />
    </div>
  )
}
