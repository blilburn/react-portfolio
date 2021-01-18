import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/index';
import About from './pages/About';

import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer/index'
import Wrapper from './components/Wrapper/index'
function App() {
  return (
    // <p>hey</p>
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route component={About}/>
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
