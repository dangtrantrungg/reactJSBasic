import logo from './logo.svg';
import './App.scss';
import MyComponent from '../components/Example/MyComponent';
import ToDoList from '../components/Todo/ToDoList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Router>
            <Nav />
            <img src={logo} className="App-logo" alt="logo" />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/todo">
                <ToDoList />
              </Route>
              <Route path="/about">
                <MyComponent />
              </Route>
            </Switch>
          </Router>
        </header>
      </Router>


      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />

    </div>
  );
}

export default App;
