import React, { useState } from 'react'
import { CSVLink, CSVDownload } from "react-csv";


export default function SearchCompanyInfo(props) {
  const [search, setSearch] = useState('')

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
  };
  const filteredData = props.stocks.filter((el) => {
    if (search === '') {
      return el;
    }
    else {
      return el.company.toLowerCase().includes(search)
    }
  })
  //const[searchCompany, setsearchCompany]=useState()
  // useEffect(() => {
  // Axios.get("")
  // .then(function (res) {
  //     console.log(respons.data);
  // **** get company using company code****
  // **** right now data is coming from the stocks=[] dataset as props****
  // })
  // }, [])
  return (
    <>
      <input
        onChange={inputHandler}
        placeholder='Search'
        style={{
          fontSize: "24px",
          padding: "10px",
          margin: "0 0 15px 15px",


        }}></input>
      <br />
      {
        <div style={search === "" ? {
          display: "none"
        } : {
          display: "block",
          color: "black",
          margin: "0 0 15px 15px",
          fontSize: "24px",
        }}>
          <CSVLink data={filteredData}>Download me</CSVLink>
        </div>
      }

      <div>
        {
          search !== "" ?
            <table
              style={{
                border: "1px solid black",
              }}>
              <thead>
                <tr
                  key={Math.random()}>
                  {Object.keys(props.stocks[0]).map((key) => (
                    <th
                      key={key}
                      style={{
                        border: "1px solid black",
                        padding: "10px"

                      }}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, i) => (
                  <tr
                    key={i}>
                    {Object.values(item).map((val) => (
                      <td
                        // key={}
                        style={{
                          border: "1px solid black",
                          padding: "10px"

                        }}>{val}
                      </td>
                    ))}
                    {/* <td onClick={deleteData}>X</td> */}
                  </tr>
                ))}
              </tbody>
            </table> : ""
        }

      </div>
    </>
  )
}
