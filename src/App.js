import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'
import NotFound from './Components/NotFound'
// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ebank/login" component={Login} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </>
)

export default App
