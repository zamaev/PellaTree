import React from 'react'
import {
  BrowserRouter as 
  Router,
  // Switch,
  // Route,
  // Link,
  // useRouteMatch,
  useParams
} from "react-router-dom"

import Branch from './Branch'

export default function Project(props) {
  const { projectId, branchId } = useParams()
  const path = props.path + '/' + projectId

  let state = []

  function hundleChangeBranche(e) {
    console.log(e.target.id)
    state.push(e.target.id)
    console.log(state)
  }

  return (
    <div className="Project">
      <h2>Project {projectId}</h2>
      <Branch onChangeBranche={hundleChangeBranche} path={path} projectId={projectId} branchId={branchId} />
    </div>
  )
}

