import React, { useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../../components/Navbar/Navbar";
import "./login.css"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../utils/config.json";

function Login() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false); // initialize to false
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const login = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${config.api_base_url}/user/login`, {
        username: username,
        password: password,
      });
      console.log(response)
      if (response.status === 200) {
        if (response.data.message) {
          alert("Invalid credentials");
        } else {
          setLoginStatus(true); // update login status
          navigate("/home");
          console.log(response)
        }
      } else {
        alert("Request failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    axios.get(`${config.api_base_url}user/login`).then((response) => {
      console.log(response)
      if (response.data.loggedIn === true) {
        setLoginStatus(true); // update login status
      }
    });
  }, []);
  
  

  return (
    <div>
      <Navbar isLogged={setLoginStatus} />
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

// function Login() {
//   const [username, setusername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginStatus, setLoginStatus] = useState("");
//   const navigate = useNavigate();

//   axios.defaults.withCredentials = true;

//   const login = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(`${config.api_base_url}/user/login`, {
//         username: username,
//         password: password,
//       });

//       if (response.status === 200) {
//         if (response.data.message) {

//           alert("Invalid credentials");
//         } else {
//           setLoginStatus(true);
//           navigate("/home");
//         }
//       } else {
        
//         alert("Request failed");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

  // const login = () => {
  //   axios.post(`${config.api_base_url}/user/login`, {
  //     username: username,
  //     password: password,
  //   }).then((response) => {
  //     if (response.data.message) {
  //       setLoginStatus(response.data.message===true);
  //       navigate("/home");
  //     } else {
  //       setLoginStatus(response.data[0].username);
  //     }
  //   });
  // };
//   useEffect(() => {
//     axios.get(`${config.api_base_url}/user/login`).then((response) => {
//       console.log(response)
//       if (response.data.loggedIn == true) {
//         setLoginStatus(response.data.user[0].username);
//         setLoginStatus(true);
//         console.log(response)
//       }
//     });
//   }, []);
  

//   return (
//     <div>
//       <Navbar isLogged={setLoginStatus} />
//       <div className="container">
//         <form className="form" onSubmit={login}>
//           <TextField
//             label="UserName"
//             variant="filled"
//             type="text"
//             required
//             value={username}
//             onChange={(e) => setusername(e.target.value)}
//           />{" "}
//           &nbsp; &nbsp;
//           <TextField
//             label="Password"
//             variant="filled"
//             type="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />{" "}
//           &nbsp; &nbsp;
//           <Button type="submit" variant="contained" color="primary">
//             Login
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;