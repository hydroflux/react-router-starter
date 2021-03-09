import './App.css';

import { Redirect, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <Route
        exact
        path="/"
        render={(routerProps) => <Home {...routerProps} name="Jack" /> } />
      <Route path="/about" >
        <About />
      </Route>
      <Route path="/contact" component={Contact} />

      <PrivateRoute path="/profile" component={About}/>
    </div>
  );
}

function PrivateRoute({ component: Component , ...props }){
  return localStorage.token
  ? <Route  {...props} render={(routerProps) => <Component {...routerProps} {...props} />}/>
  : <Redirect to='/login' />
}


export default App;
