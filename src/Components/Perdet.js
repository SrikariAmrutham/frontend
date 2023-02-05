import React from "react";
export default function Perdet(){
    return(
        <>
      <div id="myper" className="container-fluid"><br/>
      <h3 style={{textAlign: "center"}}>MY PERMITS</h3>
      <br/>
      <div className="table-responsive">

      <table className="table" id="Info">
        <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Mobile No.</th>
            <th>Registration No.</th>
            <th>Engine No.</th>
            <th>License No.</th>
            <th>Vehicle Model</th>
            <th>Validity</th>

            
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>

        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>

        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>

        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>

        </tr>
    </table> 
    </div>
    <button type="button" className="printbtn" onClick={Print} style={{marginLeft:"auto",marginRight:"auto"}}> Print </button>  

    </div>
        </>

    );

}
const Print = () =>{    
  window.print();
}
