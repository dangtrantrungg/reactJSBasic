import logo from './logo.svg';
import './App.scss';
import MyComponent from '../components/Example/MyComponent';
import ToDoList from '../components/Todo/ToDoList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ToDoList />} />
            <Route path="/about" element={<MyComponent />} />
          </Routes>
        </header>
      </BrowserRouter>


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
