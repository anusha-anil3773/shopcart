import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import config from "../utils/config.json";
function Siginup() {
  const [usernameReg, setusernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

const signUp =()=>{
    axios.post(`${config.api_base_url}/user/add`,
    {username:usernameReg,
    password:passwordReg
    }).then((response)=>{
        console.log(response)
    })
}
  return (
    <div>
      <Navbar />
      <div className="container" >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 150,
            color: "white",
          }}
        >
          <TextField
            style={{ width: 400 }}
            label="UserName"
            variant="filled"
            type="text"
            required
            value={usernameReg}
            onChange={(e) => setusernameReg(e.target.value)}
          />{" "}
          &nbsp; &nbsp;
          <TextField
            style={{ width: 400 }}
            label="Password"
            variant="filled"
            type="password"
            required
            value={passwordReg}
            onChange={(e) => setPasswordReg(e.target.value)}
          />{" "}
          &nbsp; &nbsp;
          <div>
            <Button onClick={signUp} type="submit" variant="contained" color="primary">
              Signup
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Siginup;
