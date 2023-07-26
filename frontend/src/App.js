import './App.css';
import { Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div className="App">
     <Route exact path='/' component={Homepage}></Route>
     <Route path='/chats' component={ChatPage}></Route>

    </div>
  );
}

export default App;
