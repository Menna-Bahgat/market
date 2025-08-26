import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/home.js/Home';
import { Fragment } from 'react';
import Navs from './component/Navs/Nave';
import Header from './component/home.js/Header';

function App() {
  return(
    <Fragment>
      <Navs/>
      <Header/>
      <Home/>
    </Fragment>
  ) 
}
export default App;
