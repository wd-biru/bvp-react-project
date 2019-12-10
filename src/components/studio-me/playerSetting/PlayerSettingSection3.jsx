import React from 'react';
import MediaControlComponent from './PlayerSettingControlComponent/MediaControlComponent';
import LayerControlComponent from './PlayerSettingControlComponent/LayerControlComponent';

class PlayerSettingSection3 extends React.Component{
    render(){
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
                <MediaControlComponent/>
                <LayerControlComponent/>
            </div>
        );
    }
}

export default PlayerSettingSection3;

       