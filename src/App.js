
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Meal from './components/Meal/Meal';
import Meals from './components/Meals/Meals';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Meals></Meals>
          </Route>
          <Route path="/details/:detailId">
            <Details></Details>
          </Route>
          <Route path="/show/:detail">
            <Details></Details>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route >
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
