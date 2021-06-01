import Logo from './strava-brands.png'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import {Home} from './components/Home'
import {Apartments} from './components/Apartments'
import {Pricing} from './components/Pricing'
import {Bookings} from './components/Bookings'
import {Local} from './components/LocalArea'
import {Contact} from './components/Contact'
import {NotFound} from './components/NotFound'

import {Header} from './components/Header'

const NavItems = [
  {"name" : "Home" , "link" : "/"},
  {"name" : "Apartments" , "link" : "/Apartments"},
  {"name" : "Pricing" , "link" : "/pricing"},
  {"name" : "Bookings" , "link" : "/book"},
  {"name" : "Local" , "link" : "/local"},
  {"name" : "Contact" , "link" : "/contact"}

]

function App() {
  return (
    <div className="website">
      <Header logo={Logo} nav = {NavItems}/>
      <header className="header"></header>
      <main className="content"></main>
      <Switch>
        <Route exact path= "/">
          <Home /> 
        </Route>
        <Route path= "/Apartments">
          <Apartments /> 
        </Route>
         <Route path= "/pricing">
          <Pricing /> 
        </Route>
        <Route path= "/book">
          <Bookings /> 
        </Route>
        <Route path= "/Local">
          <Local /> 
        </Route>
        <Route path= "/contact">
          <Contact /> 
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
      <footer className="footer"></footer>
    </div>
  )
  
}

export default App;
