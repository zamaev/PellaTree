import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { getDbProjects, setDbProject } from '../../services/api.services'

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getDbProjects().then(dbProjects => {
      dbProjects.length ? setProjects(dbProjects) : setProjects([{ empty: true }])
    })
  }, [])


  function hundleAddProject(e) {
    if (e.key === 'Enter' && e.target.value !== '') {
      e.target.classList.add('project-loader')
      setDbProject(e.target.value.trim()).then(({ title, projId, branchId }) => {
        const db = projects.slice()
        projects[0].empty
          ? setProjects([{ id: projId, title, branch: branchId, countBranch: 1 }])
          : setProjects([...db, { id: projId, title, branch: branchId, countBranch: 1 }])
      })

    }
  }


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

    return (
      <div className="list-group mb-3">
        {
          projects[0].empty
            ? ''
            : projects.map(proj => {
              return (
                <Link to={`tree/${proj.id}/${proj.branch}`} className="list-group-item d-flex justify-content-between align-items-center my-proj" key={proj.id}>
                  {proj.title}
                  <span className="badge badge-primary">{proj.countBranch}</span>
                </Link>
              )
            })
        }
        <input onKeyPress={hundleAddProject} className="list-group-item d-flex justify-content-between align-items-center my-proj" key={Math.random()} placeholder="Добавить проект..." />
      </div>
    )
  }

  return (
    <div className="container-lg projects">
      <h3>Деревья</h3>
      {renderProjectsList()}
    </div>
  )
}