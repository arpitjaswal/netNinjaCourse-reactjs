import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
function App() {
  // const val = "Welcome to the blog";
  // const likes = 50;
  // const link = "https://www.linkedin.com/in/arpitjaswal/";
  // const objperson = {name: "Arpit", age: 23, email: "iamarpitjaswal@gmail.com"}
  return (
    <div className="App">
      <NavBar/>
      <h1>App component</h1>
      <HomePage/>
    </div>
  );
}

export default App;