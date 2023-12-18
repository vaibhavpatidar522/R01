
import './App.css';
import Navbar from './components/navigation/Navbar'
import { BrowserRouter } from 'react-router-dom';
import Body from './components/Body/Body' 

function App() {
  return (
    <BrowserRouter>
         <Navbar/>
         <Body/>
    </BrowserRouter>
   
  );
}

export default App;
