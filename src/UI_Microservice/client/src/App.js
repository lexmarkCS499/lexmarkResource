import logo from './logo.svg';
import './App.css';
import MyButton from './components/button';
import NameForm from './components/NameForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Enter a name below to see how many times it's been entered! Hello Lexmark  !
        </p>
          <NameForm />
          <MyButton />
      </header>
    </div>
  );
}

export default App;
