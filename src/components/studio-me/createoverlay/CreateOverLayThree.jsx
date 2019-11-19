import React from 'react';

import createoverlay6 from '../../../assets/img/me/createoverlay-top6.png';
import createoverlay7 from '../../../assets/img/me/createoverlay-top7.png';
import Images from '../../../assets/img/me/images.jpg';

function CreateOverLayThree() {
    return (
        <div className="col-sm-2 createoverlay-three">
          <div className="code-fram">
            <div className="one">x <span>260</span></div>
            <div className="two">y <span>107</span></div>
            <div className="fore">height <span>360</span></div>
            <div className="three">width <span>500</span></div>            
          </div>
          <form >
            <div className="form-group mb-0">
              <textarea className="form-control" rows="5" id="comment" placeholder="">&lt;iframe src="http://bvpstudio.s3-website-us-west-1.amazonaws.com/" height="200" width="300"&gt;&lt;/iframe&gt;</textarea>
            </div>                
          </form>
           
 
          <div className="sectiomtwo">
                <label>Layers</label>
            </div>
            <div className="Layerslist">
                <ul>
                    <li>1. Iframe <span><img src={createoverlay6} className="mr-2" /><img src={createoverlay7} /> <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" checked /></span></li>
                    <li>2. Shape square<span><img src={createoverlay6} className="mr-2" /><img src={createoverlay7} /><input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" /></span></li>
                </ul>
            </div>
            <div className="sectiomtwo">
                <label>Library</label>
            </div>
            <div className="Layerslist">
              <form className="navbar-form navbar-left" >
                  <input type="text" className="form-control navseacrh" placeholder="Search" name="search" />
                    <input type="button" name="" value="UPLOAD" className="UPLOAD" />
              </form>
            </div>
              
            <div className="sectiomtwo">
                <label>Layers</label>
            </div>
            <div className="Layerslist">
                <ul>
                    <li>1. Iframe <span><img src={createoverlay6} className="mr-2" /><img src={createoverlay7} /> <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" checked /></span></li>
                    <li>2. Shape square<span><img src={createoverlay6} className="mr-2" /><img src={createoverlay7} /><input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" /></span></li>
                </ul>
            </div>
            <div className="sectiomtwo">
                <label>Library</label>
            </div>
            <div className="Layerslist">
              <form className="navbar-form navbar-left" action="/action_page.php">
                  <input type="text" className="form-control navseacrh" placeholder="Search" name="search" />
                    <input type="button" name="" value="UPLOAD" className="UPLOAD" />
                </form>
            
              <div className="container-fluid">                
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card">
                      <div className="card-body">
                        <img src={Images} alt="John" />
                          <div className="cappadd">
                            <h5>John Doe</h5>
                            <p className="title">CEO &amp; Founder, Exa</p>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card">
                      <div className="card-body">
                        <img src={Images} alt="John" />
                          <div className="cappadd">
                            <h5>John Doe</h5>
                            <p className="title">CEO &amp; Founder, Exa</p>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card">
                      <div className="card-body">
                        <img src={Images} alt="John" />
                          <div className="cappadd">
                            <h5>John Doe</h5>
                            <p className="title">CEO &amp; Founder, Exa</p>
                          </div>
                      </div>
                    </div>
                  </div>
            </div>
            </div>   
         </div>

     </div>
        
    )
}

export default CreateOverLayThree


