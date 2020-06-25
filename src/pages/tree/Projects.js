import React, { useState, useEffect } from 'react'
import { Link, useRouteMatch } from "react-router-dom"
import { getDbProjects, setDbProjects } from '../../services/api.services'

export default function Projects() {
  const match = useRouteMatch();
  const [projects, setProjects] = useState([])

  function hundleAddProject(e) {
    if (e.key === 'Enter' && e.target.value !== '') {
      e.target.classList.add('project-loader')
      setDbProjects(e.target.value).then(({ title, projId, branchId }) => {
        const db = projects.slice()
        projects[0].empty
          ? setProjects([{ id: projId, title, branch: branchId }])
          : setProjects([...db, { id: projId, title, branch: branchId }])
      })

    }
  }

  useEffect(() => {
    getDbProjects().then(dbProjects => {
      dbProjects.length ? setProjects(dbProjects) : setProjects([{ empty: true }])
    })
  }, [])


  function renderProjectsList() {
    if (!projects.length) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    }
    if (projects[0].empty) {
      return (
        <div className="list-group">
          <input onKeyPress={hundleAddProject} className="list-group-item d-flex justify-content-between align-items-center my-proj" placeholder="New project..." />
        </div>
      )
    }
    return (
      <div className="list-group">
        {
          projects.map(proj => {
            return (
              <Link to={`${match.url}/${proj.id}/${proj.branch}`} key={proj.id} className="list-group-item d-flex justify-content-between align-items-center my-proj">
                {proj.title}
                <span className="badge badge-primary">14</span>
              </Link>
            )
          })
        }
        <input onKeyPress={hundleAddProject} className="list-group-item d-flex justify-content-between align-items-center my-proj" key={Math.random()} placeholder="New project..." />
      </div>
    )
  }

  return (
    <div className="container-lg projects">
      {renderProjectsList()}
    </div>
  )
}