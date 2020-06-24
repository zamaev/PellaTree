import React, { useState } from 'react'
import { Link, useRouteMatch } from "react-router-dom"

export default function Projects() {
  let match = useRouteMatch();

  const [dbProjects, setProject] = useState([
    { id: 0, title: 'hello', branch: '0.9308308838638693' },
    { id: 1, title: 'world', branch: '0.4348644683168645' },
    { id: 2, title: 'all', branch: '0.2561468498498468' }
  ])

  function hundleAddProject(e) {
    if (e.key === 'Enter') {
      const db = dbProjects.slice()
      setProject([...db, { id: dbProjects.length, title: e.target.value, branch: Math.random().toString() }])
      e.target.value = ''
    }
  }

  return (
    <div className="container-lg">
      <div className="list-group Projects">
        {
            dbProjects.map(proj => {
              return (
                <Link to={`${match.url}/${proj.id}/${proj.branch}`} key={proj.id} className="list-group-item d-flex justify-content-between align-items-center my-proj">
                  {proj.title}
                  <span className="badge badge-primary">14</span>
                </Link>
              )
            })
        }
        <input onKeyPress={hundleAddProject} className="list-group-item d-flex justify-content-between align-items-center my-proj" placeholder="New project..." />
      </div>
    </div>
  )
}