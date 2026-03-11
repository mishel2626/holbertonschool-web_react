import './App.css'
import holbertLogo from "./assets/holberton-logo.jpg";
import myDate from './utils';
import User from "./User.jsx";
import Admin from './Admin.jsx';
import { useState } from 'react';

function App() {

  const [value, setValues] = useState({ email: "", password: "" });
  const [auth, setAuth] = useState([]);

  const users = [
    { id: 1, name: "name", lastname: "lastname", email: "email.email@gmail.com", password: "password", isAdmin: true },
    { id: 2, name: "name", lastname: "lastname", email: "email1.email@gmail.com", password: "password", isAdmin: false },
    { id: 3, name: "name", lastname: "lastname", email: "email2.email@gmail.com", password: "password", isAdmin: false },
    { id: 4, name: "name", lastname: "lastname", email: "email3.email@gmail.com", password: "password", isAdmin: false },
    { id: 5, name: "name", lastname: "lastname", email: "email4.email@gmail.com", password: "password", isAdmin: false },
    { id: 6, name: "name", lastname: "lastname", email: "email5.email@gmail.com", password: "password", isAdmin: false }
  ]

  const handleLogin = (event) => {
    event.preventDefault();
    const result = users.find((user, index) => {
      return user.email === value.email && user.password === value.password
    });
    setAuth(result);
  }


  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  }

  console.log("auth---", auth);


  return (
    <>
      <div className='App-header'>
        <img src={holbertLogo} alt='holberton logo' />
        <h1 style={{ color: "#e1003c" }}>School dashboard</h1>
      </div>

      <div className='App-body'>
        <p> Login to access the full dashboard</p>
      </div>
      <div className='App-footer'>
        <p>Copyright {myDate.getCurrentYear()} -  {myDate.getFooterCopy(true)}</p>

        <form onSubmit={handleLogin}>
          <input type='email' name='email' value={value.email} onChange={handleChange}></input>
          <input type='password' name='password' value={value.password} onChange={handleChange}></input>
          <button type='submit'>Logi</button>
        </form>

        {
          auth.isAdmin === true ? "Hello Admin" : "Hello User"
        }
      </div>
    </>
  )
}

export default App