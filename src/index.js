import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <App />,
  document.getElementById('root')
)

// !!! Я убрал строгий режим потому что он почему-то дважды рендерил страницы
// Либо он просто дважды вызивал функцию для проверки но DOM не рендерил
// Нужно будет назобраться

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
