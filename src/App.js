import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/Home';
import Create from './components/create/Create';
import Edit from './components/edit/Edit';
import Nav from './components/nav/Nav';
import NoteDetails from './components/home/NoteDetails';
import Update from './components/edit/Update';
import AuthProvider from './context/AuthProvider';
import Login from './authentication/Login';
import Notfound from './components/notfound/Notfound';
import PrivateRoute from './privateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Nav></Nav>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/notes/:notesKey">
              <NoteDetails></NoteDetails>
            </PrivateRoute>
            <Route path="/create">
              <Create></Create>
            </Route>
            <PrivateRoute path="/edit">
              <Edit></Edit>
            </PrivateRoute>
            <PrivateRoute path="/notes/edit/:noteId">
              <Update></Update>
            </PrivateRoute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
