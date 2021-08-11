import './App.css';
import Login from './components/login/login';
import ProtectedRoute from './components/routes/protectedRoutes';
import {
  Switch,
  Route,
  Redirect  
} from "react-router-dom";
import UserPage from './components/user/userPage';

function App() {
  console.log("app")
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <ProtectedRoute path="/user" exact component={UserPage} />
        <Route path="*">
          <Redirect from="/" to="/user"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
