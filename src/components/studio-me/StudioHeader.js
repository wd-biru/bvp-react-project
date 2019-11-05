import React from 'react';

import logo from './img/studio-bvp-logo.png';
import ques from './img/questions-circular.png';
import alarm from './img/alarm.png';
import user from './img/user.png';

const StudioHeader = () => {
    return (
<header>
	<nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
	  <a className="navbar-brand" href="dashboard.html"><img src={logo} alt="BVP" className="studio logo-menu2" /> </a>
	  <div className="">
	    
	    <ul className="navbar-nav my-2 my-lg-0">

            <li className="nav-item d-flex align-items-center"><a href="#" className="nav-link"><img src={ques} /></a></li>
           
            <li className="nav-item dropdown"> <a id="notifications" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link"><img src={alarm} /> </a>
            </li>
           
            <li className="nav-item"><a href="login.html" className="nav-link logout"> <img src={user} /></a></li>   
	    </ul>
	  </div>  
	</nav>
</header>
       
    )
}

export default StudioHeader;
