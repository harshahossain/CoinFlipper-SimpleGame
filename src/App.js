import logo from './logo.svg';
import './App.css';
import Coin from './coin'
import Flipper from './flipper';

function App() {
  return (
    <div className="App">
      <Flipper />
      {/* <Coin result='https://cdns-images.dzcdn.net/images/cover/2ea38f430f28a1b8b6fb5d35402dcf96/500x500.jpg'/> */}
    </div>
  );
}

export default App;
