import './App.css';
import Navigation from './Components/Navigation';
import Newsletter from './Components/Newsletter';
import { Pagetext } from './Components/Pagetext';
import { Projectcards } from './Components/Projectcards';
import Showcase from './Components/Showcase'
import { Footer } from './Components/Footers';
import { Accordion } from './Components/Accordion';
import { Skillslist } from './Components/Skillslist';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Showcase/>
      <Newsletter/>
      <Projectcards/>
      <Pagetext/>
      <Skillslist/>
      <Accordion/>
      <Footer/>
            </div>
  );
}

export default App;
