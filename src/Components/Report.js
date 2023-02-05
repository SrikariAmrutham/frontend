import React from "react";

function Reports(){
    return (
        <>
<div className="bg ">

  <div className="tab-content">
    <div id="myreg" className="container tab-pane active"><br/>
      <h3>MY REGISTRATIONS</h3>
      <br/>
      <div className="table-responsive">

      <table className="table" id="Info">
        <tr>
            <th>S.No</th>
            <th>OWNER NAME</th>
            <th>REGISTRATION NUMBER</th>
            <th>VEHICLE MODEL</th>
            <th>REGISTRATION DATE</th>
            <th>RC STATUS</th>
        </tr>
        <tr>
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
        </tr>
        <tr>
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
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
    </table>  
  </div>
  
    </div>
    <div id="mylic" className="container tab-pane fade "><br/>
      <h3>MY LICENSE</h3>
      <br/>
      <table id="Info">
        <tr><td>LICENSE NUMBER:</td></tr>
        <tr><td>HOLDER'S NAME:</td></tr>
        <tr><td>ADDRESS:</td></tr>
        <tr><td>MOBILE NUMBER:</td></tr>
        <tr><td>DATE OF ISSUE:</td></tr>
        <tr><td>VALIDITY:</td></tr>
    </table>
    </div>
    <div id="myper" className="container tab-pane fade"><br/>
      <h3>MY PERMITS</h3>
      <br/>
      <div className="table-responsive">

      <table className="table" id="Info">
        <tr>
            <th>S.No</th>
            <th>NAME</th>
            <th>VEHICLE NUMBER</th>
            <th>LICENSE NUMBER</th>
            <th>VEHICLE MODEL</th>
            <th>VALIDITY</th>
        </tr>
        <tr>
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
        </tr>
        <tr>
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
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
    </table> 
    </div>
    </div>
    <br/>
    <div className="cen">    <button onclick={window.print()}>Click to Print</button></div>
  </div>
</div>
</>

    );
}
export default Reports