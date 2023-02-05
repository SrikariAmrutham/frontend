import React from "react";

function Newper(){
    return (
    <>
    <div class="container">
    <h2 style={{justifyContent: "center",display: "flex"}}>Permit Application Form</h2>
    <form action="">
      <div class="row">
        <div class="col-25">
          <label for="fname">Full Name</label>
        </div>
        <div class="col-75">
          <input type="text" id="fname" name="fullname"/>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="oname">Occupation</label>
        </div>
        <div class="col-75">
          <input type="text" id="oname" name="oname"/>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="gen">Gender</label>
        </div>
        <div class="col-75">
          <select id="gen" name="gen">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>      
      <div class="row">
        <div class="col-25">
          <label for="perad">Permanant Address</label>
        </div>
        <div class="col-75">
          <input type="text" id="perad" name="perad"/>
        </div>
      </div>
       <div class="row">
        <div class="col-25">
          <label for="tempad">Temporary Address</label>
        </div>
        <div class="col-75">
          <input type="text" id="tempad" name="tempad"/>
        </div>
      </div>      
      <div class="row">
        <div class="col-25">
          <label for="dob">Date of Birth</label>
        </div>
        <div class="col-75">
          <input type="date" id="dob" name="dob"/>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="aadhar">Aadhar number</label>
        </div>
        <div class="col-75">
          <input type="number" id="aadhar" name="aadhar"/>
        </div>
      </div>

      <div class="row">
        <div class="col-25">
          <label for="avatar">Upload Aadhar card:</label>
        </div>
        <div class="col-75">
          <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="avatar">Upload your photograph:</label>
        </div>
        <div class="col-75">
          <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="eng">Phone Number</label>
        </div>
        <div class="col-75">
          <input type="number" id="eng" name="eng"/>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="email">Email</label>
        </div>
        <div class="col-75">
          <input type="email" id="email" name="email"/>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="vehcls">Class of Vehicle</label>
        </div>
        <div class="col-75">
          <input type="text" id="vehcls" name="vehcls"/>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="ln">License Number</label>
        </div>
        <div class="col-75">
          <input type="number" id="ln" name="ln"/>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="rn">RC Number</label>
        </div>
        <div class="col-75">
          <input type="number" id="rn" name="rn"/>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="departure">Departure Date</label>
        </div>
        <div class="col-75">
          <input type="date" id="departure" name="departure"/>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="reason">Reason for the permit</label>
        </div>
        <div class="col-75">
          <input type="text" id="reason" name="reason"/>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="desired">Desired permit</label>
        </div>
        <div class="col-75">
          <input type="text" id="desired" name="desired"/>
        </div>
      </div>

      <br/>
      <div style={{width: "auto",justifyContent: "center",display: "flex"}} class="row">
        <input style={{width: "100px",marginRight: "5px"}} type="reset" value="Reset"/>
        <input style={{width: "100px"}} type="submit" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal" value="Submit"/>
      </div>
      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
      
            <div class="modal-body">
              <p>Your form has been successfully submitted.</p>
            </div>
            <br/>
            
            <div class="modal-footer">
              <button type="button" class="btn btn-danger " data-bs-dismiss="modal">Close</button>
            </div>
      
          </div>
        </div>
      </div>
    </form>
    <br/>
  </div>
  <br/>
        </>
    );
}

export default Newper