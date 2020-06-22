import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/notes">Notes</Link>
          </li>
          <li>
            <Link to="/tree">Tree</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/tree">
            <Tree />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Notes() {
  return <h2>Notes</h2>;
}


function Tree() {
  let match = useRouteMatch();

  // из базы достаются бранчи фиксированные
  const dbProjects = [
    { id: 1, title: 'project1', branch: '0.9308308838638693' },
    { id: 2, title: 'project2', branch: '0.4348644683168645' },
    { id: 3, title: 'project3', branch: '0.2561468498498468' }
  ]

  return (
    <div>
      <br /><br />
      <h2>Tree</h2>
      <div>

        <ul>
          {dbProjects.map(proj => <li key={proj.id}><Link to={`${match.url}/${proj.id}/${proj.branch}`}>{proj.title}</Link></li>)}
        </ul>

        <Switch>
          <Route path={`${match.path}/:projectId/:branchId`}>
            <Project path={match.path} />
          </Route>
        </Switch>

      </div>
    </div>
  );
}

function Project(props) {
  const { projectId, branchId } = useParams()
  const path = props.path + '/' + projectId

  let state = []

  function hundleChangeBranche(e) {
    console.log(e.target.id)
    state.push(e.target.id)
    console.log(state)
  }

  return (
    <div>
      <br /><br />
      <h2>Project {projectId}</h2>
      <Branch onChangeBranche={hundleChangeBranche} path={path} projectId={projectId} branchId={branchId} />
    </div>
  )
}

function Branch(props) {

  // поиск в бд по проекту и ветке
  const dbBranch = {
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
    <div>
      <h3>{dbBranch.title}</h3>
      <p>{dbBranch.description}</p>
      <ul>
        {
          dbBranch.branches.map(branch =>
            <li key={branch.id}><Link onClick={props.onChangeBranche} id={branch.id} to={`${props.path}/${branch.id}`}>{branch.id}</Link></li>
          )
        }

      </ul>
    </div>
  )
}
