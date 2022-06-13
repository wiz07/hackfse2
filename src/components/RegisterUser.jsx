import React, { useState } from 'react'
import ReactLoading from 'react-loading';

export default function RegisterUser(props) {

    const [userclassname, setuserclassname] = useState("field");
    const [passclassname, setpassclassname] = useState("field");
    const [errmesg, seterrmesg] = useState("")


    const handleRegister = (e) => {
        var username = document.getElementById("loginform")[0].value;
        var pw = document.getElementById("loginform")[1].value;

        // setload(true);

        // let loginUrl = "";

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
        let randnum = Math.random().toString().concat("0".repeat(3)).substr(2, 3).toString();
        // setUserSession(respons.data.email);
        //       setTokenSession("R-" + randnum, respons.data.email);
        //     // setload(false);
        //   });
        console.log(randnum)
        if (document.getElementById("loginform")[1].value == "" || document.getElementById("loginform")[0].value == "") {
            alert("User Name or Pasword missing")
        }
        if (username !== "" && pw !== "") {
            props.history.push('/success')
            let allUsers = JSON.parse(localStorage.getItem("users"))
            allUsers.push(
                {
                    token:randnum,
                    name: username,
                    pw: pw
                }
            )
            localStorage.setItem('users', JSON.stringify(allUsers));
        }
    }
    return (
        <div>
            <form className="form-wrapper" id="loginform" >
                <h2 style={{ textAlign: "center" }}>Register User</h2>
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

                <div className="field" style={{ height: "100%" }}>
                    <input
                        type="button"
                        value="REGISTER"
                        style={{ background: "darkgreen" }}
                        onClick={handleRegister}
                    />
                </div><br />
            </form>
            <div id="errdiv" ><span className="errmsg">{errmesg}</span></div>
        </div>
    )
}
