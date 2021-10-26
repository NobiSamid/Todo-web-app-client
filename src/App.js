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

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/notes">
            <Home></Home>
          </Route>
          <Route exact path="/notes/:notesKey">
            <NoteDetails></NoteDetails>
          </Route>
          <Route path="/create">
            <Create></Create>
          </Route>
          <Route path="/edit">
            <Edit></Edit>
          </Route>
          <Route path="/notes/edit/:noteId">
            <Update></Update>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
