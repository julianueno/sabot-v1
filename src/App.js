import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";


import MainPage from './pages/Main';
import OnRoadPage from './pages/OnRoad';
import RaidsPage from './pages/Raids';
import AccidentsPage from './pages/Accidents';
import MyPayPage from './pages/MyPay';
import UpDatesPage from './pages/UpDates';
import AboutPage from './pages/About';

import Navbar from './components/navigation/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
      < Route path='/on-road'><OnRoadPage /></Route>
        <Route path='/raids'><RaidsPage /></Route>
        <Route path='/accidents'><AccidentsPage /></Route>
        <Route path='/my-pay'><MyPayPage /></Route>
        <Route path='/updates'><UpDatesPage /></Route>
        <Route path='/about'><AboutPage /></Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
