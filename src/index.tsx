import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// import App from './exercise 2/App'
import reportWebVitals from './reportWebVitals'

// const notesData = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     date: '2019-05-30T17:30:31.098Z',
//     important: true
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only JavaScript',
//     date: '2019-05-30T18:39:34.091Z',
//     important: false
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     date: '2019-05-30T19:20:14.298Z',
//     important: true
//   }
// ]

// const courses = {
//   id: 1,
//   name: 'Half Stack application development',
//   parts: [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10,
//       id: 1
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7,
//       id: 2
//     },
//     {
//       name: 'State of a component',
//       exercises: 14,
//       id: 3
//     }
//   ]
// }
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    {/* <App  courses={courses}/> */}
    {/* <App notesData={notesData}/> */}
    <App/>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
