import { Navigate } from "react-router-dom";


function AuthProtect(props) {
  if (props.isAuth) {
    return <Navigate to="/home" />;
  }
  return props.children;
}

export default AuthProtect;