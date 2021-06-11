import React from 'react'
import { Route, Switch, useLocation, useParams, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom';
import { Nav, NavItem} from 'reactstrap';

const Topics = () => {
  const location = useLocation();
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h1>{location.pathname}</h1>
      <hr />
      <Nav vertical>
        <NavItem>
          <Link to={`${url}/html`}>Html</Link>
        </NavItem>
        <NavItem>
          <Link to={`${url}/css`}>CSS</Link>
        </NavItem>
        <NavItem>
          <Link to={`${url}/js`}>JS</Link>
        </NavItem>
      </Nav>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  )
}

function Topic() {
  let { topicId } = useParams();
  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  )
}

export default Topics
