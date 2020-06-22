import React from 'react'
import {
  BrowserRouter as
    Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  // useParams
} from "react-router-dom"

import Home from './pages/home/Home'
import Notes from './pages/notes/Notes'
import Tree from './pages/tree/Tree'

export default function App() {
  return (
    <Router>
      <div className="App">
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
  )
}