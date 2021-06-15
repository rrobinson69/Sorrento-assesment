import Logo from './banners/sorrento_by_the_sea_logo.jpg'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import {Home} from './components/Home'
import {Apartments} from './components/Apartments'
import {Pricing} from './components/Pricing'
import {Bookings} from './components/Bookings'
import {LocalArea} from './components/LocalArea'
import {Contact} from './components/Contact'
import {NotFound} from './components/NotFound'
import Social1 from './banners/facebook_small.png'
import Social2 from './banners/instagram_small.png'
import Social3 from './banners/twitter_small.png'
import Social4 from './banners/youtube-variation_small.png'


import {Header} from './components/Header'

const NavItems = [
  {"name" : "Home" , "link" : "/"},
  {"name" : "Apartments" , "link" : "/Apartments"},
  {"name" : "Pricing" , "link" : "/pricing"},
  {"name" : "Bookings" , "link" : "/book"},
  {"name" : "Local Area" , "link" : "/LocalArea"},
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
        <Route path= "/LocalArea">
          <LocalArea /> 
        </Route>
        <Route path= "/contact">
          <Contact /> 
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
      <footer className="footer"> <p class="copyright"> &copy; Sorrento 2021</p>
      <nav class="social-nav">
      <a href="www.facebook.com/sorrentovictoria">
                        <img src= { Social1 } width="30" height="30"
                            alt="Sorrento Apartments on Facebook" /></a>
                    <a href="www.instagram.com/sorrentovictoria">
                        <img src= { Social2 } width="30" height="30"
                            alt="Sorrento Apartments on Instagram" /></a>
                    <a href="www.twitter.com/sorrentovictoria">
                        <img src= { Social3 } width="30" height="30"
                            alt="Sorrento Apartments on Youtube" /></a>
                            <a href="www.youtube.com/sorrentovictoria">
                        <img src= { Social4 } width="30" height="30"
                            alt="Sorrento Apartments on Youtube" /></a>

      </nav>
      </footer>
    </div>
  )
  
}

export default App;
