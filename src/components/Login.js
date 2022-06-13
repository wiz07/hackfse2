import React, { useEffect, useState } from "react";
import "./styles/LoginStyle.css";
import { setUserSession, setTokenSession } from '../Utils/Common';
import ReactLoading from 'react-loading';
import Axios from "axios";
import { withRouter } from "react-router-dom";



const Login = (props) => {

  document.title = "Login";
  const [userclassname, setuserclassname] = useState("field");
  const [passclassname, setpassclassname] = useState("field");
  const [load, setload] = useState(false);
  const [errmesg, seterrmesg] = useState("")
  let docu = document.getElementById("loginform");

  const handleLogsubmit = (e) => {
    // setload(true);

    // let loginUrl = "http://localhost:8000/api/v1.0/tweets/login";

    // let inputdata = {
    //   "email": docu.elements[0].value,
    //   "password": docu.elements[1].value,
    // };

    // Axios.post(loginUrl, inputdata)
    //   // eslint-disable-next-line
    //   .then((respons) => {
    //     console.log(respons.data);
    //     seterrmesg(respons.data.errorMessage);
    //     if (respons.data.status && respons.data.errorMessage === null) {
    // let randnum = Math.random().toString().concat("0".repeat(3)).substr(2, 3).toString();
    // setUserSession(respons.data.email);
    //       setTokenSession("R-" + randnum, respons.data.email);

    let creds = JSON.parse(localStorage.getItem("users"))
    let userInput = document.getElementById("loginform")
    for (let i in creds) {
      if (userInput[0].value === creds[i].name && userInput[1].value === creds[i].pw) {
        if (
          document.getElementById("loginform")[i].value === "admin"
        ) {
          props.setAdminLogged(true)
          props.setUserLogged("Admin")
          // window.location.assign("/admin")
          props.history.push("/admin")
        }
        else if (document.getElementById("loginform")[i].value !== "admin") {
          props.setAdminLogged(false)
          props.setUserLogged("User")
          // window.location.assign("/home")
          props.history.push("/home")


        }
      }
      // if (userInput[0].value !== creds[i].name) {
      //   alert("Please Sign up to proceed")
      //   window.location.assign("/user")
      //   // break
      // }
    }
  }
  useEffect(() => {
    if (!localStorage.getItem("users")) {
      let users = []
      users.push(
        {
          token: "001",
          name: "admin",
          pw: "admin"
        }
      )
      localStorage.setItem("users", JSON.stringify(users))
    }
  }, [])

  return (
    <div>
      <form className="form-wrapper" id="loginform" >
        <h2 style={{ textAlign: "center" }}>LOGIN</h2>
        <div className={userclassname}>
          <input
            id={1}
            type="text"
            placeholder="Enter Username"
            onFocus={() => setuserclassname("field active")}
            onBlur={() => setuserclassname("field")}
            required
          />
          <label htmlFor={1}>
            {"Username"}
          </label>
        </div>
        <br />

        <div className={passclassname}>
          <input
            id={2}
            type="password"
            placeholder="Enter Password"
            onFocus={() => setpassclassname("field active")}
            onBlur={() => setpassclassname("field")}
            required
          />
          <label htmlFor={2}>
            {"Password"}
          </label>
        </div>
        <br />
        <div className="field" style={{ height: "100%", background: "transparent", cursor: "pointer" }}>
          <input
            type="button"
            value="LOGIN"
            onClick={handleLogsubmit}
            style={{ background: "green" }}
          />
          <div className="loader" >
            {load && <ReactLoading type="spinningBubbles" color="#E6E6E6" />}
          </div><br /><br />

        </div><br />
        <div ><label className="or"> OR </label></div><br />
        <div className="field" style={{ height: "100%" }}>
          <input
            type="button"
            value="REGISTER"
            style={{ background: "darkgreen", cursor: "pointer" }}
            onClick={() => props.history.push('/register')}
          />
        </div><br />
      </form>
      <div id="errdiv" ><span className="errmsg">{errmesg}</span></div>
    </div>
  );
}


export default withRouter(Login);