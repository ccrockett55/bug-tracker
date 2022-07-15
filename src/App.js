import './App.css';
import {useSelector} from 'react-redux';
import Login from './Views/Login/login';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './Views/sidebar/sidebar';
import ViewBugs from './Views/Pages/viewBugs';

function App() {
  const {auth} = useSelector(state => state)
  return (
    <div>
      <Router>
      {!auth.LoggedIn ? <Login /> :
      <div>
      <Sidebar />
      <ViewBugs />
      </div>
      }
      </Router>
    </div>
  );
}

export default App;
