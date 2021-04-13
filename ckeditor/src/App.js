import { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './components/Menu'
import routes from './routes'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          {/* Menu */}
          <Menu />
          {/* Nội dung */}
          <Switch  >
            {this.showRoute(routes)}
          </Switch>
        </Router>
      </div>
    );
  }
  showRoute = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            component={route.main}
          />
        )
      });
    }
    return result;
  }
}
export default App;
