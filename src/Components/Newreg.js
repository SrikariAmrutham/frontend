import React from "react";

function Newreg(){
    return(
    <>
    <div  className="container">
    <h2 style={{justifyContent: "center",display: "flex"}}>Vehicle Registration Form</h2>

    <form action="regapplication.html">
      <div className="row">
        <div className="col-25">
          <label for="fname">Full Name</label>
        </div>
        <div className="col-75">
          <input type="text" id="fname" name="fullname" required/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="age">Age</label>
        </div>
        <div className="col-75">
          <input type="number" id="age" name="age" required/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="gen">Gender</label>
        </div>
        <div className="col-75">
          <select id="gen" name="gen">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>      
      <div className="row">
        <div className="col-25">
          <label for="perad">Permanant Address</label>
        </div>
        <div className="col-75">
          <input type="text" id="perad" name="perad" required/>
        </div>
      </div>
       <div className="row">
        <div className="col-25">
          <label for="tempad">Temporary Address</label>
        </div>
        <div className="col-75">
          <input type="text" id="tempad" name="tempad" required/>
        </div>
      </div>      
      <div className="row">
        <div className="col-25">
          <label for="dob">Date of Birth</label>
        </div>
        <div className="col-75">
          <input type="date" id="dob" name="dob" required/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="aadhar">Aadhar number</label>
        </div>
        <div className="col-75">
          <input type="number" id="aadhar" name="aadhar"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="avatar">Upload Aadhar card:</label>
        </div>
        <div className="col-75">
          <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="avatar">Upload your photograph:</label>
        </div>
        <div className="col-75">
          <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
        </div>
      </div>

      <div className="row">
        <div className="col-25">
          <label for="dad">Address of the dealer</label>
        </div>
        <div className="col-75">
          <input type="text" id="dad" name="dad" required/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="vehcls">Class of Vehicle</label>
        </div>
        <div className="col-75">
          <input type="text" id="vehcls" name="vehcls" required/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="eng">Engine Number</label>
        </div>
        <div className="col-75">
          <input type="number" id="eng" name="eng" required/>
        </div>
      </div>
      <br/>
      <div style={{width: "auto",justifyContent: "center",display: "flex"}} class="row">
        <input style={{width: "100px",marginRight: "5px"}} type="reset" value="Reset"/>
        <input style={{width: "100px"}} type="submit" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal" value="Submit"/>
      </div>
      <br/>
      
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
      
            
      
            <div className="modal-body">
              <p>Your form has been successfully submitted.
                <br/>
                Your Application number is:xxxxxxx
              </p>

            </div>
            <br/>
            
      
            <div className="modal-footer">
              <button type="button" className="btn btn-danger " data-bs-dismiss="modal">Close</button>
            </div>
      
          </div>
        </div>
      </div>
   
    </form>
  </div>
  <br/>
        </>
);

}

export default Newreg