import React, { useState } from 'react'

export default function DeleteCompany(props) {
    const [userclassname, setuserclassname] = useState("field");
    const deleteCompanyHandler = () => {

        let companyCode = document.getElementById("loginform")[0].value;
        props.setdeletCompany(companyCode)
        // console.log(props.stocks)


    }
    //const[deleteCompany,setdeleteCompany]=useState()
    // useEffect(() => {
    // Axios.delete("")
    // .then(function (res) {
    //     console.log(respons.data);
    // })
    // }, [])
    return (
        <>
            <div>DeleteCompany</div>
            <form className="form-wrapper" id="loginform" >
                <h2 style={{ textAlign: "center" }}>Remove Company</h2>
                <div className={userclassname}>
                    <input
                        id={1}
                        type="text"
                        placeholder="Enter Company Code"
                        onFocus={() => setuserclassname("field active")}
                        onBlur={() => setuserclassname("field")}
                        required
                    />
                    <label htmlFor={1}>
                        {"Company Code"}
                    </label>
                </div>
                <br />

                <div className="field" style={{ height: "100%" }}>
                    <input
                        type="button"
                        value="Delete"
                        style={{ background: "darkgreen" }}
                        onClick={deleteCompanyHandler}
                    />
                </div><br />
            </form>
        </>
    )
}
