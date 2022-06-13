import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Success from './components/Success';
import PublicRoute from './components/Routes/PublicRoute';
import PrivateRoute from './components/Routes/PrivateRoute';
import UserHome from './components/UserHome';
import AdminHome from "./components/AdminHome"
import RegisterUser from './components/RegisterUser';
function App(props) {
  const [adminLogged, setAdminLogged] = useState(false);
  const [userLogged, setUserLogged] = useState("");

  const AdminLogin = () => {
    setAdminLogged(!adminLogged)
  }
  const authHandler = (nextState, replace, next) => {
    if (userLogged === "User") {
      // replace("/home")
      props.history.push("/home")
    }
    else if (userLogged === "Admin") {
      replace("/admin")
    }
  }
  return (
    <div className="App" style={{ zoom: "80%" }}>
      <BrowserRouter>
        <div>
          <Header
            userLogged={userLogged} />
          <div className="content">
            <PublicRoute exact path="/" component={() => (
              <Login
                setAdminLogged={setAdminLogged}
                AdminLogin={AdminLogin}
                setUserLogged={setUserLogged} />
            )} />
            <PublicRoute path="/register" component={Register} />
            <PublicRoute path="/home" component={UserHome} onEnter={authHandler} />
            <PublicRoute path="/user" component={RegisterUser} />
            <PublicRoute path="/admin" component={AdminHome} />
            <PublicRoute path="/success" component={Success} />

          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;