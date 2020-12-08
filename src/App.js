import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Movie
        title="Fellowship of the ring"
        hours="2h"
        minutes=":58m"
         />
        <Movie 
         title="The Two Towers"
         hours="2h"
         minutes=":59m"
        />
        <Movie 
           title="Fellowship of the ring"
           hours="2h"
           minutes=":33m"
           />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
