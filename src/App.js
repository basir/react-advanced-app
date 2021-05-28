import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import NewCounter from './NewCounter';
import UserInfo from './UserInfo';
import NewUserInfo from './NewUserInfo';
import Layout from './Layout';
import MainContent from './MainContent';
import UserList from './UserList';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="pages">
        <div className="page-header">
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>{' '}
          <NavLink to="/product" activeClassName="active">
            Product
          </NavLink>{' '}
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </div>
        <div className="page-content">
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route path="/product">
              <ProductPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
