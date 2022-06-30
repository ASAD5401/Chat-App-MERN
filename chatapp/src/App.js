import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home'
import Chat from './pages/Chat'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navigation></Navigation>
    <Routes>
      <Route path="/" element={<Home/>}/>

      <Route path="/chat" element={<Chat/>}/>

      <Route path="/login" element={<LogIn/>}/>

      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
    </> );
}

export default App;
