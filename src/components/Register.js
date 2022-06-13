import React, { useState, useEffect } from 'react';
import "./styles/LoginStyle.css";
import { setUserSession } from '../Utils/Common';
import Axios from "axios";

function Register(props) {

  document.title = "Register";
  let doc = document.getElementById("regform");
  const [selectclass, setselectclass] = useState({ cCode: false, cName: false, cCEO: false, cTurn: false, cWeb: false });
  const [errmsgCode, seterrmsgCode] = useState("");
  const [errmsgName, seterrmsgName] = useState("");
  const [errmsgCEO, seterrmsgCEO] = useState("");
  const [errmsgTurn, seterrmsgTurn] = useState("");
  const [errmsgWeb, seterrmsgWeb] = useState("");
  const [userDetails, setuserDetails] = useState({
    companyCode: "",
    companyName: "",
    ceoName: "",
    companyTurn: "",
    companyWeb: "",
  });

  const companyCodeHandler = (e) => {

    if (e.target.value !== "" && e.target.value.match("^[a-zA-Z0-9]+$") === null) {
      document.getElementById("err1").style.display = "block";
      seterrmsgCode("*Code should contain only alphabets and numbers");
    }
    else if (e.target.value.match("^[a-zA-Z]+$") !== null) {
      document.getElementById("err1").style.display = "none";
      seterrmsgCode("");
      setuserDetails({ ...userDetails, companyCode: doc.elements[0].value });
    }
  }

  const companyNameHandler = (e) => {
    if (e.target.value !== "" && e.target.value.match("^[a-zA-Z0-9]+$") === null) {
      document.getElementById("erruname").style.display = "block";
      seterrmsgName("*Company name should contain only alphabets and numbers");

    }
    else if (e.target.value === "" || e.target.value.match("^[a-zA-Z0-9]+$") !== null) {
      document.getElementById("erruname").style.display = "none";
      seterrmsgName("");
      setuserDetails({ ...userDetails, companyName: doc.elements[1].value });
    }
  }

  const ceoNameHandler = (e) => {
    if (e.target.value !== "" && e.target.value.match("^[a-zA-Z]+$") === null) {
      document.getElementById("errceoname").style.display = "block";
      seterrmsgCEO("*CEO name should contain only alphabets");

    }
    else if (e.target.value === "" || e.target.value.match("^[a-zA-Z]+$") !== null) {
      document.getElementById("errceoname").style.display = "none";
      seterrmsgCEO("");
      setuserDetails({ ...userDetails, ceoName: doc.elements[2].value });
    }
  }
  //need to test more
  const turnoverHandler = (e) => {
    if (e.target.value !== "" && e.target.value.match("^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)+$") === null) {
      document.getElementById("errturn").style.display = "block";
      seterrmsgTurn("*Turn over should contain only numbers and must be greater than 10(Cr.)");

    }
    else if (e.target.value === "" || e.target.value.match("^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)+$") !== null) {
      document.getElementById("errturn").style.display = "none";
      seterrmsgTurn("");
      setuserDetails({ ...userDetails, companyTurn: doc.elements[3].value });
    }
  }
  //need to test more
  const websiteHandler = (e) => {
    if (e.target.value !== "" && e.target.value.match(`^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&=]*)+$`) === null) {
      document.getElementById("errweb").style.display = "block";
      seterrmsgWeb("*Incorrect website format");

    }
    else if (e.target.value === "" || e.target.value.match(`^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&=]*)+$`) !== null) {
      document.getElementById("errweb").style.display = "none";
      seterrmsgWeb("");
      setuserDetails({ ...userDetails, companyWeb: doc.elements[4].value });
    }
  }

  const handleSubmit = (e) => {
    // if (errmsgCode !== "" || errunmsg !== "" || erremmsg !== "") {
    //   alert("Please Enter proper details");
    //   e.preventDefault();
    // }
    // else {
    //   let registerUrl = "";

    // let inputdata = {
    //   companyCode:userDetails.companyCode,
    //   companyName:userDetails.companyName,
    //   companyCEO:userDetails.ceoName,
    //   companyTurnover:userDetails.companyTurn,
    //   companyWEB:userDetails.companyWeb,

    // }

    //   Axios.post(registerUrl, inputdata)
    //     // eslint-disable-next-line
    //     .then((respons) => {
    //       console.log(respons.data);
    //       if (respons.data.sucessMessage === "Registration Successful") {
    //         // setUserSession(userDetails);
    //         props.history.push('/');
    //       }
    //       else {
    //         seterrmesg(respons.data.errorMessage);
    //         setTimeout(() => {
    //           seterrmesg(null);
    //         }, 6000);
    //       }
    //     });
    // }
    props.history.push("/success")
    // window.location.assign("/success")
  }

  return (

    <div>
      <form className="form-wrapper" id="regform" autoComplete="off">
        <h2 style={{ textAlign: "center" }}>REGISTER</h2>
        <div className={`field ${selectclass.cCode ? "active" : ""}`}>
          <input
            id={1}
            type="text"
            name="Name"
            placeholder="Enter Company Code"
            onChange={companyCodeHandler}
            onFocus={() => setselectclass({ cCode: true })}
            onBlur={() => setselectclass({ cCode: false })}
            required
          />
          <label htmlFor={1}>
            Company Code
          </label>
        </div>
        <div><label style={{ display: "none", color: "darkred" }} id='err1'>{errmsgCode}</label></div> <br />
        <div className={`field ${selectclass.cName ? "active" : ""}`}>
          <input
            id={2}
            type="Username"
            placeholder="Enter Company Name"
            onChange={companyNameHandler}
            onFocus={() => setselectclass({ cName: true })}
            onBlur={() => setselectclass({ cName: false })}
            required
          />
          <label htmlFor={2}>
            {"Company Name"}
          </label>
        </div>  <div><label style={{ display: "none", color: "darkred" }} id='erruname'>{errmsgName}</label></div><br />


        <div className={`field ${selectclass.cCEO ? "active" : ""}`}>
          <input
            id={3}
            type="Username"
            placeholder="Enter CEO Name"
            onChange={ceoNameHandler}
            onFocus={() => setselectclass({ cCEO: true })}
            onBlur={() => setselectclass({ cCEO: false })}
            required
          />
          <label htmlFor={2}>
            {"CEO Name"}
          </label>
        </div>  <div><label style={{ display: "none", color: "darkred" }} id='errceoname'>{errmsgCEO}</label></div><br />

        <div className={`field ${selectclass.cTurn ? "active" : ""}`}>
          <input
            id={4}
            type="Username"
            placeholder="Enter Turnover (in Cr.)"
            onChange={turnoverHandler}
            onFocus={() => setselectclass({ cTurn: true })}
            onBlur={() => setselectclass({ cTurn: false })}
            required
          />
          <label htmlFor={2}>
            {"Turnover"}
          </label>
        </div>  <div><label style={{ display: "none", color: "darkred" }} id='errturn'>{errmsgTurn}</label></div><br />

        <div className={`field ${selectclass.cWeb ? "active" : ""}`}>
          <input
            id={5}
            type="Username"
            placeholder="Enter Website"
            onChange={websiteHandler}
            onFocus={() => setselectclass({ cWeb: true })}
            onBlur={() => setselectclass({ cWeb: false })}
            required
          />
          <label htmlFor={2}>
            {"Website"}
          </label>
        </div>  <div><label style={{ display: "none", color: "darkred" }} id='errweb'>{errmsgWeb}</label></div><br />



        <div className="field" style={{
          width: "100%", background: "green",
          // left: "-20px", height: "90%",
        }}>
          <input
            type='button'
            value="SUBMIT"
            onClick={handleSubmit}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div><label style={{ display: "none", color: "darkred" }}></label></div> <br />

      </form>

    </div>
  );
}

export default Register;