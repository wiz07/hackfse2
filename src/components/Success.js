import React from 'react';
import "./styles/LoginStyle.css";
import * as d3 from "d3";

const Success = (props) => {

    document.title = "Successfully Registered";
    d3.csv("/data/sample1.csv", function(data) {
      for (var i = 0; i < data.length; i++) {
          console.log(data);
          // console.log(data[i].Age);
      }
  });

    return(
       
        <div>
        <h2>SUCCESSFULLY REGISTERED.......PLEASE TRY LOGING IN</h2>
        <div className="field" style={{ width: "30%", background: "green", height: "90%", }}>
         <input
          type='button'
          value="LOGIN"
          style={{ cursor: "pointer" }}
          onClick={()=> props.history.push('/')}
        />
      </div>
      </div>

    )
}

export default Success;