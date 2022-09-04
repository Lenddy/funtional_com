import logo from './logo.svg';
import './App.css';
import People from './components/People';

function App() {
  return (
    <div className="App">
      <h1>inversion</h1>
      <People f_name = {"lenddy"} l_name={" Morales "} age = {18} Hair_color = {"Black"}>
      {/* this is a children */}
      <p>hello this is how you make a children how this instance</p>
      </People>
      <People  f_name = {"kenia"} l_name={" rivera "} age = {24} Hair_color = {"Black"}></People>
    </div>
  );
}

export default App;
