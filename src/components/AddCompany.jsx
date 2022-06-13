import React, { useState } from 'react'

export default function AddCompany(props) {
  const [companyclassname, setcompanyclassname] = useState("field");
  const [userclassname, setuserclassname] = useState("field");
  const [descclassname, setdescclassname] = useState("field");
  const [initpricecclassname, setinitpricecclassname] = useState("field");
  const [symcclassname, setsymcclassname] = useState("field");



  const [passclassname, setpassclassname] = useState("field");

  const addCompanyHandler = () => {
    let company = document.getElementById("loginform")[0].value;
    let description = document.getElementById("loginform")[1].value;
    let intial_price = document.getElementById("loginform")[2].value;
    let price_2002 = document.getElementById("loginform")[3].value;
    let price_2007 = document.getElementById("loginform")[4].value;
    let symbol = document.getElementById("loginform")[5].value;

    // if (company !== "" || description !== "" || intial_price !== "" || price_2002 !== "" || price_2007 !== "" || symbol !== "") {
    props.setaddNewCompany(
      {
        "company": company,
        "description": description,
        "initial_price": intial_price,
        "price_2002": price_2002,
        "price_2007": price_2007,
        "symbol": symbol
      },
    )
    // }
  }
  return (
    <>
      <div>AddCompany</div>
      <form className="form-wrapper" id="loginform" >
        <h2 style={{ textAlign: "center" }}>Add Company</h2>
        <div className={companyclassname}>
          <input
            id={1}
            type="text"
            placeholder="company"
            onFocus={() => setcompanyclassname("field active")}
            onBlur={() => setcompanyclassname("field")}
            required
          />
          <label htmlFor={1}>
            {"Company"}
          </label>
        </div>
        <br />

        <div className={descclassname}>
          <input
            id={2}
            type="text"
            placeholder="description"
            onFocus={() => setdescclassname("field active")}
            onBlur={() => setdescclassname("field")}
            required
          />
          <label htmlFor={2}>
            {"Description"}
          </label>
        </div>
        <br />

        <div className={userclassname}>
          <input
            id={3}
            type="text"
            placeholder="initial_price"
            onFocus={() => setuserclassname("field active")}
            onBlur={() => setuserclassname("field")}
            required
          />
          <label htmlFor={1}>
            {"Price"}
          </label>
        </div>
        <br />

        <div className={passclassname}>
          <input
            id={4}
            type="text"
            placeholder="price_2002"
            onFocus={() => setpassclassname("field active")}
            onBlur={() => setpassclassname("field")}
            required
          />
          <label htmlFor={2}>
            {"Price in 02"}
          </label>
        </div>
        <br />

        <div className={initpricecclassname}>
          <input
            id={5}
            type="text"
            placeholder="price_2007"
            onFocus={() => setinitpricecclassname("field active")}
            onBlur={() => setinitpricecclassname("field")}
            required
          />
          <label htmlFor={1}>
            {"Price in 07"}
          </label>
        </div>
        <br />

        <div className={symcclassname}>
          <input
            id={6}
            type="text"
            placeholder="symbol"
            onFocus={() => setsymcclassname("field active")}
            onBlur={() => setsymcclassname("field")}
            required
          />
          <label htmlFor={1}>
            {"Symbol"}
          </label>
        </div>
        <br />
        <div className="field" style={{ height: "100%" }}>
          <input
            type="button"
            value="Add"
            style={{ background: "darkgreen" }}
            onClick={addCompanyHandler}
          />
        </div><br />
      </form>
    </>
  )
}
