import logo from './logo.svg';
import './App.css';

import HeaderEx from './components/HeaderEx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Slider from './components/Slider';
import Footer from './components/Footer';
import { Routing } from './components/Routing';
import BasicRead from './components/CRUDClass/BasicRead';

function App() {
  return (
    <div className="App">
      {/* <HeaderEx/>
      <Routing/>
      <Footer/> */}
      <BasicRead/>
    </div>
  );
}

export default App;
