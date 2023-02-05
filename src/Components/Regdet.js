import React from "react";
import Sampledata from "../sample.json"

function Regdet(){
    return(
        <>
       <div className="container-fluid" id="printdiv">
        <br/>
       <h3 style={{textAlign: "center"}}>MY REGISTRATIONS</h3>
       <br/>
       <div class="table-responsive">

      <table class="table" id="Info">
        <thead>
        <tr>
            {/* <th>S.No</th> */}
            <th>Owner name</th>
            <th>Registration no.</th>
            <th>Chassis no.</th>
            <th>Registration date</th>
            {/* <th>Vehicle model</th>
            <th>RC Status</th> */}
        </tr>
        </thead>
        <tbody>
          {
            Sampledata.map( (record) => {
                let id=record.id;
                let oname =record.name;
                let rn = record.regno ;
                let cn = record.chassis;
                let rdate = record.date;
                return (<tr key={id}><td>{oname}</td><td>{rn}</td><td>{cn}</td><td>{rdate}</td></tr>);
            })
            }

    </tbody>
        
    </table>
    <button type="button" className="printbtn" onClick={Print} style={{marginLeft:"auto",marginRight:"auto"}}> Print </button>  
  </div>
  </div>
  
  </>

    );
}
const Print = () =>{    
  window.print();
}


export default Regdet