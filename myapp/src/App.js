import './App.css';
import Navigation from './Components/Navigation';
import Newsletter from './Components/Newsletter';
import { Pagetext } from './Components/Pagetext';
import { Projectcards } from './Components/Projectcards';
import Showcase from './Components/Showcase'
import { Footer } from './Components/Footers';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Showcase/>
      <Newsletter/>
      <Projectcards/>
      <Pagetext/>


      
      <Footer/>
            </div>
  );
}

export default App;
