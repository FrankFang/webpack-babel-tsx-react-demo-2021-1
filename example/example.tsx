import * as ReactDOM from 'react-dom'
import { FButton } from '../lib/index';
import { Router, Switch, Route } from 'react-router'
import { createHashHistory } from 'history'

const root = document.createElement('div')
document.body.append(root)
const history = createHashHistory()
const Page = () => {
  return (
    <Router history={history}>
      <div>导航栏</div>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route>
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  );
}

const App = () => {
  return <div>
    <FButton>hi</FButton>
  </div>
}

ReactDOM.render(<Page />, root)