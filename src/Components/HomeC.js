import React from "react";
import { Link } from "react-router-dom";
import lic from "./lic.png"
import reg from "./reg.png"

function HomeC()
{
    return(
        <>

        <div className="container-fluid">
         <div className="row">
          <div className="col-33" >
            <div className="box-item"> 
                  <p className="center-position"> 
                      <img src={reg} alt="Know your Registration Details"/>
                  </p>
              <h5 className="center-position">Know your Vehicle Details</h5>
               <p className="box-description">
                  Get details about your all your registrations
              </p>
                <Link to="/Regdet" style={{color:"blue"}}>View Details</Link>
                <br/>
           </div>
                                          
          </div>
          <div className="col-33" >
            <div className="box-item"> 
                     <p className="center-position"> 
                         <img src={lic} alt="Know your License Details"/>
                     </p>
                 <h5 className="center-position">Know your License Details</h5>
                  <p className="box-description">
                     Get details about your Driving License
                 </p>
                  <Link to="/Licdet" style={{color:"blue"}}>View Details</Link>
                   <br/>
              </div>
          </div>
          <div className="col-33" >
            <div className="box-item"> 
                     <p className="center-position"> 
                         <img src={lic} alt="Know your Permit Details"/>
                     </p>
                 <h5 className="center-position">Know your Permit Details</h5>
                  <p className="box-description">
                     Get details about your permits you have
                 </p>
                   <Link to="/Perdet" style={{color:"blue"}}>View Details</Link>
                   <br/>
              </div>
          </div>
          </div>
          <br/>
          </div>
    </>
    );

}
export default HomeC