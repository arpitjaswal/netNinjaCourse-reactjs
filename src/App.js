import './App.css';

function App() {
  const val = "Welcome to the blog";
  const likes = 50;
  const link = "https://www.linkedin.com/in/arpitjaswal/";
  // const objperson = {name: "Arpit", age: 23, email: "iamarpitjaswal@gmail.com"}
  return (
    <div className="App">
      <div className='content'>
        <h1>{val}</h1>
        <p>Liked {likes} times!</p>
        {/* <p>{objperson}</p> */}
        <p>{10}</p>
        <p>{"hello ninjas!"}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random()*10}</p>
        <a href={link}>My Linkedin profile</a>
      </div>
    </div>
  );
}

export default App;