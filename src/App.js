import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/home';
import FisicaPage from './components/fisicaPage';
import ProfilePage from './components/ProfilePage';
import InformaticaPage from './components/Informatica';
import LoginPage from './components/loginPage';
function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/profile" component={ProfilePage}/>
      <Route path="/informatica" component={InformaticaPage}/>
    </Router>
  );
}

export default App;
