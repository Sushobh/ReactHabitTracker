import logo from './logo.svg';
import './App.css';
import auth from 'auth'
import network from 'network'


function App() {
  return (
    <div className="App">
      <header className="App-header">
            {'User is '+auth.isLoggedIn()} 
            {'My Habit  is '+network.getHabits()} 
      </header>
    </div>
  );
}

export default App;
