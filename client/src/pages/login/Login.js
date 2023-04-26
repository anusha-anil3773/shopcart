import React, { useState } from 'react';
import { connect } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Navbar from '../../components/Navbar/Navbar';
import './login.css';
import { loginRequest } from '../../redux/action/UserAction';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    props.dispatch(loginRequest(username, password));
  };
  if (props.loginStatus) {
    navigate('/home');
  }


  return (
    <div>
        <Navbar isLogged={props.loginStatus} />
      <div className="container">
        <form className="form" onSubmit={login}>
          <TextField
            label="UserName"
            variant="filled"
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />{' '}
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

const mapStateToProps = (state) => ({
  loginStatus: state.user.loginStatus,
});

export default connect(mapStateToProps)(Login);

