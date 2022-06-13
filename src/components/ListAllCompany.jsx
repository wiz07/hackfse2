import React, { useEffect } from 'react'
import { CSVLink, CSVDownload } from "react-csv";

export default function ListAllCompany(props) {
  //const[allCompanyData,setallCompanyData]=useState()
  // useEffect(() => {
  // Axios.get("")
  // .then(function (res) {
  //     console.log(respons.data);
  // **** assign to state/var to get all company details****
  // })
  // }, [])
  return (

    <div>
      <CSVLink
        style={{
          color: "black",
          margin: "0 0 15px 15px",
          fontSize: "24px",
        }}
        data={props.stocks}>Export all Data</CSVLink>

      <table
        style={{
          marginTop:"20px",
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
            {/* <th>action</th> */}
          </tr>
        </thead>
        <tbody>
          {props.stocks.map((item, i) => (
            <tr
              key={i}>
              {console.log(item.id)}
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

      </table>
    </div>
  )
}
