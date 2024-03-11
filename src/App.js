import logo from "./logo.svg";
import "./App.css";

import ButtonComponent from "./New Components/ComponentButton";
import ImageComponent from "./New Components/ComponentImg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ButtonComponent
          className="coloredButton"
          link="https://reactjs.org"
          testo="Learn React"
        />
        <ImageComponent
          className="costumImg"
          src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhY3R8ZW58MHx8MHx8fDA%3D"
          alt="image"
        />
        <ImageComponent
          className="costumImg"
          src="https://images.unsplash.com/photo-1592609931041-40265b692757?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlYWN0fGVufDB8fDB8fHww"
          alt="image2"
        />
      </header>
    </div>
  );
}

export default App;
