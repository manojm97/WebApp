import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App">
          <h1>Hello</h1>
          <Popup
            trigger={<button className="Button"> Show</button>}
            position="right center"
            popupClass={'popup-content'}
          >
            <p>
              <h2>welcome</h2>
              Have a nice day!
            </p>
          </Popup>
        </div>
      </header>
    </div>
  );
}

export default App;
