import React from 'react';

import './css/errorstyle.css';
import './css/me_studio.css';



const ErrorPage = () => {
    return (
        <body>
                <div className="container-fluid errorpage">
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="notfound">
                                 <div className="notfound">
                                    <div className="notfound-404">
                                        <h1 className="erroropps"> Oops!</h1>
                                    </div>
                                    <h2>404 - Page not found</h2>
                                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                                    <a href="dashboard.html">Go To Homepage</a>
                                 </div>
                            </div>
                        </div> 
                    </div>
                </div>
        </body>
    )
}

export default ErrorPage;

