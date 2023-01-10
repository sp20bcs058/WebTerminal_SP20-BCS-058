import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        Welcome to login page!
      </h1>

      <form>
        <div>
          <label>Username:</label><br></br>
          <input type="text" name="user" required />
        </div>
      
        <div>
          <label>Password:</label><br></br>
          <input type="password" name="password" required />
        </div>

        <br></br>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default App;
