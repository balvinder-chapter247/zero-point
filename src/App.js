import './App.css';
import { Provider } from 'react-redux'
import store from '../src/redux/store'
import Home from './views/Home'
import Header from './views/CommonSection/Header';
import Routing from './routes';

function App() {
 
  return (
   <Routing/>
  );
}

export default App;
