import React from 'react';

import './App.css';

function App() {
  return (
    const LoginUser= async (e)=>{
      const res=await fetch('/https://dummyjson.com/auth/login',{
        method:"POST", headers:{
          "Content-Type":"application/json" },
          body:JSON.stringify({ username, password }) }); const data=res.json();
          if(!username){ alert("Invalid Username or Password");
          localStorage.setItem('itemName', data.users.users.token) }
    else{ alert("submitted"); }}
    
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
