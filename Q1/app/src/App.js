import React from 'react';
import axios from 'axios';

import './App.css';


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

const login = async (event) => {
  event.preventDefault();

  if (!username || !password) {
    console.log("Both fields are required");
    return;
  }

  try {
    const response = await axios.post("https://dummyjson.com/auth/login", {
      username,
      password,
    });
    setToken(response.data.token);
    localStorage.setItem("token", response.data.token);
  } catch (err) {
    console.log("Error! Try again!");
  }

return(
    
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
        <button onClick={login}>Sign In</button>
      </form>
    </div>
  );
}

export default App;
