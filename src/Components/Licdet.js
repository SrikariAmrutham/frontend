import React from "react";
function Licdet(){
    return(
      <div id="mylic" className="container-fluid">
      <br/>
      <h3 style={{textAlign: "center"}}>MY LICENSE</h3>
      <br/>
      <table id="tab2">
        <tr><th>License No :</th><td>xxxx xxxxx</td></tr>
        <tr><th>Holder's name :</th><td></td></tr>
        <tr><th>Date of birth :</th><td></td></tr>
        <tr><th>Address :</th><td></td></tr>
        <tr><th>Mobile No. :</th><td></td></tr>
        <tr><th>Date of issue :</th><td></td></tr>
        <tr><th>Validity :</th><td></td></tr>
    </table>
    <br/>
    <button type="button" className="printbtn" onClick={Print} style={{marginLeft:"auto",marginRight:"auto"}}> Print </button>  

    </div>

    );
}
const Print = () =>{    
  window.print();
}

export default Licdet