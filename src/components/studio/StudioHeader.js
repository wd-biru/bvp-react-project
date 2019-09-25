import React from 'react';

import logo from './me/studio-bvp-logo.png';
import Ques from './me/questions-circular.png';
import Alarm from './me/alarm.png';
import User from './me/user.png';

const StudioHeader = () => {
    return (
        <div>
            
                <header>
                    <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
                      <a className="navbar-brand" href="">
                          <img src={logo} alt="BVP" className="mystudio" />
                      </a>
                    <div className="Icon_Header">
                        <ul className="navbar-nav my-2 my-lg-0">
                            <li className="nav-item d-flex align-items-center"><a href="#" className="nav-link">
                                <img src={Ques} /></a></li>
                            {/* Notifications*/}
                            <li className="nav-item dropdown">
                                 <a id="notifications" rel="nofollow" data-target="#" href="#" 
                                 data-toggle="dropdown" aria-haspopup="true" 
                                 aria-expanded="false" className="nav-link">
                                     <img src={Alarm} />

                                     </a>
                            </li>
                            {/* Logout    */}
                            <li className="nav-item"><a href="" className="nav-link logout"> <img src={User} /></a></li>   
                        </ul>
                    </div>  
                    </nav>
                </header>


        </div>
    )
}

export default StudioHeader
