import React from 'react';

import createoverlay6 from '../../../assets/img/me/createoverlay-top6.png';
import createoverlay7 from '../../../assets/img/me/createoverlay-top7.png';


function PlayerSettingSection3() {
    return (
       
        <div className="col-sm-2 createoverlay-three playerSetting-three">
         <form>
              <div className="form-group">
                  <label for="sel1">Global Animation</label>
                  <select className="form-control" id="sel1">
                      <option>Fade in Cascode</option>
                      <option>go to link</option>
                      <option>jump to point in video</option>
                  </select>
              </div>
              <div className="form-group">
                  <label for="sel1">Direction</label>
                  <select className="form-control" id="sel1">
                      <option>None</option>
                      <option>Demo1</option>
                      <option>Demo2</option>
                      <option>Demo3</option>
                  </select>
              </div>
              <a href="#">
                <label for="sel1"></label>
                  <input type="button" name="" value="PREVIEW" className="preview-btn" />
              </a>
          </form>
          <form >
              <div className="form-group">
                  <select className="form-control" id="sel1">
                      <option>Controls</option>
                      <option>Play</option>
                      <option>Forward</option>
                      <option>Back</option>
                      <option>Sound</option>
                      <option>Full Screen</option>
                  </select>
              </div>
          </form>
          <div className="sectiomtwo">
              <label>Layers</label>
          </div>
          <div className="Layerslist">
              <ul>
                  <li><a href="#">1. Iframe 
                     <span><img src={createoverlay6} 
                     className="mr-2" /><img src={createoverlay7}
                      /> 
                      <input type="radio" className="form-check-input" 
                      id="radio1" name="optradio" value="option1" checked 
                      />
                      </span>
                      </a>
                      </li>
                  <li><a href="#">2. Shape square
                  <span>
                      <img src={createoverlay6} className="mr-2" />
                      <img src={createoverlay7} />
                      <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" />
                      </span>
                      </a>
                      </li>
                  <li>
                      <a href="#">3. Player Layer
                    <span>
                      <img src={createoverlay6} className="mr-2" />
                          <img src={createoverlay7} />
                          <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" />
                          </span>
                          </a>
                    </li>
              </ul>
          </div>
      </div>
      
    )
}

export default PlayerSettingSection3

       