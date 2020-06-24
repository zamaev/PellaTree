import React from 'react'
import { Link } from "react-router-dom"


export default function Branch(props) {
  const dbBranch = {    // поиск в бд по проекту и ветке
    id: props.branchId, // вернется из базы само, пишу для ясности
    title: props.branchId,
    description: 'Hello World and all men and ' + props.branchId,
    branches: [
      { id: Math.random(), title: 'пока пишу Id чтобы сопоставлять с базой' },
      { id: Math.random(), title: 'пока пишу Id чтобы сопоставлять с базой' },
      { id: Math.random(), title: 'пока пишу Id чтобы сопоставлять с базой' }
    ]
  }

  return (
    <div className="Branch">
      <h3>{dbBranch.title}</h3>
      <p>{dbBranch.description}</p>
      <div className="list-group list-group-flush branches branches-bottom mt-5 ml-5">
        {
          dbBranch.branches.map(branch =>
              <Link className="list-group-item" onClick={props.onChangeBranche} id={branch.id} key={branch.id} to={`${props.path}/${branch.id}`}>{branch.id}</Link>
          )
        }
      </div>
    </div>
  )
}