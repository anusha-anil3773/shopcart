import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
import "./login.css"; // Import the CSS file
import axios from "axios";
import config from '../../utils/config.json'
function Login() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
 
  const login = async (event) => {
    event.preventDefault(); 
    try {
      const response = await axios.post(
        `${config.api_base_url}/user/add`,
        {username:username,
        password:password}
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
<Navbar/>
      <div className="container">
        <form className="form" onSubmit={login}>
          <TextField
            label="UserName"
            variant="filled"
            type="text"
            required
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />   &nbsp; &nbsp;
          <TextField
            label="Password"
            variant="filled"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />   &nbsp; &nbsp;
          <Button  type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
      </div>

    </div>
  );
}

export default Login;
