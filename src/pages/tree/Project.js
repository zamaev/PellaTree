import React, { useState } from 'react'
import { Link, useParams } from "react-router-dom"

import Branch from './Branch'

export default function Project(props) {
  const { projectId, branchId } = useParams()
  const path = props.path + '/' + projectId
  const [list] = useState({ history: [branchId] })
  const [step] = useState({ branch: 0 })

  function hundleChangeBranche(e) {
    list.history.push(e.target.id)
    step.branch = 0
  }

  function hundleChangeHistory(e) {
    step.branch = e.target.id
  }

  function getHistory() {
    const endHistory = list.history.indexOf(step.branch)
    if (endHistory >= 0) {
      list.history = list.history.slice(0, endHistory + 1)
    }
    if (list.history.length > 1) {
      return (
        list.history.slice(0, list.history.length - 1).map((branch, i) => {
          return (
            <Link key={branch} onClick={hundleChangeHistory} id={branch} to={branch} className="list-group-item">{branch}</Link>
          )
        })
      )
    }
  }

  return (
    <div className="Project container-lg">
      <div className="list-group list-group-flush branches branches-top mb-4 mt-4">
        {getHistory()}
      </div>
      <Branch onChangeBranche={hundleChangeBranche} path={path} projectId={projectId} branchId={branchId} />
    </div>
  )
}

