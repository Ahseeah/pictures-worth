import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CategoryPage from './pages/CategoryPage'
import PhotoList from './pages/PhotoList'
import ErrorPage404 from './pages/ErrorPage404'

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={CategoryPage} />
            <Route exact path="/:hobby" component={PhotoList} />
            <Route component={ErrorPage404} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
