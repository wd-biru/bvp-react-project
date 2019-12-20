import React from 'react';
import MediaControlComponent from './PlayerSettingControlComponent/MediaControlComponent';
import LayerControlComponent from './PlayerSettingControlComponent/LayerControlComponent';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as alertActions from '../../../apiAction/Alert/AlertActions';

class PlayerSettingSection3 extends React.Component{
    render(){
        const { showPlayerPreviewPopup } = this.props;
        return (
            <div className="col-sm-2 createoverlay-three playerSetting-three">
                <form>
                    <div className="form-group">
                        <label htmlFor="sel1">Global Animation</label>
                        <select className="form-control" id="sel1">
                            <option>Fade in Cascode</option>
                            <option>go to link</option>
                            <option>jump to point in video</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="sel1">Direction</label>
                        <select className="form-control" id="sel1">
                            <option>None</option>
                            <option>Demo1</option>
                            <option>Demo2</option>
                            <option>Demo3</option>
                        </select>
                    </div>
                    <a href="#">
                        <label htmlFor="sel1"></label>
                        <input type="button" name="" value="PREVIEW" onClick={showPlayerPreviewPopup} className="preview-btn" />
                    </a>
                </form>
                <MediaControlComponent/>
                <LayerControlComponent/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(alertActions, dispatch);
}

export default connect(null, mapDispatchToProps)(PlayerSettingSection3);

       