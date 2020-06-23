import React from 'react'
import { Switch, Route, Link, useRouteMatch } from "react-router-dom"

import Project from './Project'

export default function Tree() {
  let match = useRouteMatch();

  // из базы достаются бранчи фиксированные
  const dbProjects = [
    { id: 1, title: 'project1', branch: '0.9308308838638693' },
    { id: 2, title: 'project2', branch: '0.4348644683168645' },
    { id: 3, title: 'project3', branch: '0.2561468498498468' }
  ]

  return (
    <div className="Tree">
      <h2>Tree</h2>
      <ul>
        {dbProjects.map(proj => <li key={proj.id}><Link to={`${match.url}/${proj.id}/${proj.branch}`}>{proj.title}</Link></li>)}
      </ul>
      <Switch>
        <Route path={`${match.path}/:projectId/:branchId`}>
          <Project path={match.path} />
        </Route>
      </Switch>
    </div>
  )
}