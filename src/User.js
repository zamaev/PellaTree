import React from 'react'
import authApp from './services/auth.services'

export default function User() {
  return (
    <div className="User">
      <h2>Вы должны авторизоваться</h2>
      <button onClick={authApp}>войти</button>
    </div>
  )
}