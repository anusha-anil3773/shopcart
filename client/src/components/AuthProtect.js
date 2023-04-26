import { Navigate } from "react-router-dom";

function AuthProtect(props) {
  if (props.isAuth) {
    return <Navigate to="/home" />;
  }
  return props.children;
}

export default AuthProtect;
// import React from "react"
// import { useSelector } from "react-redux"
// import { Outlet, Navigate } from "react-router-dom"

// function AuthProtect() {
//   const auth = useSelector((state) => state.auth)
//   return auth ? <Outlet /> : <Navigate to="/login" />
// }

// export default AuthProtect;