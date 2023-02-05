import React from "react";
import { Link } from "react-router-dom";
import lic from "./lic.png"
import reg from "./reg.png"

function Home()
{
    return(
        <>

        <div className="container-fluid">
         <div className="row">
          <div className="column" >
            <div className="box-item"> 
                <a>
                  <p className="center-position"> 
                      <img src={reg} alt="Know your Registration Details"/>
                  </p>
                </a>  
              <h5 className="center-position">Know your Vehicle Details</h5>
               <p className="box-description">
                  Get details about your all your registrations
              </p>
                <a ><Link to="/Regdet" style={{color:"blue"}}>View Details</Link>
                </a>
                <br/>
           </div>
                                          
          </div>
          <div className="column" >
            <div className="box-item"> 
                   <a href="">
                     <p className="center-position"> 
                         <img src={lic} alt="Know your License Details"/>
                     </p>
                   </a>  
                 <h5 className="center-position">Know your License Details</h5>
                  <p className="box-description">
                     Get details about your Driving License
                 </p>
                   <a href=""><Link to="/Licdet" style={{color:"blue"}}>View Details</Link>
                   </a>
                   <br/>
              </div>
          </div>
          <div className="column" >
            <div className="box-item"> 
                   <a href="">
                     <p className="center-position"> 
                         <img src={lic} alt="Know your Permit Details"/>
                     </p>
                   </a>  
                 <h5 className="center-position">Know your Permit Details</h5>
                  <p className="box-description">
                     Get details about your permits you have
                 </p>
                   <a href=""><Link to="/Perdet" style={{color:"blue"}}>View Details</Link>
                    </a>
                   <br/>
              </div>
          </div>
          </div>
          <br/>
          </div>
    </>
    );

}
export default Home