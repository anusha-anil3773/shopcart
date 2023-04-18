import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../../components/Navbar/Navbar";
import "./login.css"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../utils/config.json";
import { Outlet} from "react-router-dom";

function Login() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const[isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${config.api_base_url}/user/login`, {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        if (response.data.message) {

          alert("Invalid credentials");
        } else {
          setIsLogged(true);
          navigate("/home");
        }
      } else {
        
        alert("Request failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar isLogged={setIsLogged} />
      <div className="container">
        <form className="form" onSubmit={login}>
          <TextField
            label="UserName"
            variant="filled"
            type="text"
            required
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />{" "}
          &nbsp; &nbsp;
          <TextField
            label="Password"
            variant="filled"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          &nbsp; &nbsp;
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;