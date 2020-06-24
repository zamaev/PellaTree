import React from 'react'
import { Switch, Route, useRouteMatch } from "react-router-dom"

import Projects from './Projects'
import Project from './Project'

export default function Tree() {
  let match = useRouteMatch();

  return (
    <div className="Tree">
      <Switch>
        <Route path={`${match.path}/:projectId/:branchId`}>
          <Project path={match.path} />
        </Route>
        <Route path={`${match.path}`}>
          <Projects path={match.path} />
        </Route>
      </Switch>
    </div>
  )
}