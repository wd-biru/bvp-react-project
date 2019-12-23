import React from 'react';
import MediaControlComponent from './PlayerSettingControlComponent/MediaControlComponent';
import LayerControlComponent from './PlayerSettingControlComponent/LayerControlComponent';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as alertActions from '../../../apiAction/Alert/AlertActions';
import * as AnimationType from '../../Constants/Constant';


class PlayerSettingSection3 extends React.Component{
    render(){
        const { showPlayerPreviewPopup } = this.props;
        return (
            <div className="col-sm-2 createoverlay-three playerSetting-three">
                <form>
                    <div className="form-group">
                        <label htmlFor="sel1">Global Animation</label>
                        {/* eslint-disable-next-line no-console */}
                        <select className="form-control" id="sel1" onChange={(e) => console.log(e.target.value)}>
                            <option id = "sel1"value = {AnimationType.GLOBAL_ANIMATION_NONE}>None</option>
                            <option value = {AnimationType.GLOBAL_ANIMATION_FADE} >Fade</option>
                            <option value = {AnimationType.GLOBAL_ANIMATION_SLIDE}>Slide</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="sel1">Direction</label>
                        <select className="form-control" id="sel2" onChange={(e) => console.log(e.target.value)}>
                            <option value = {AnimationType.DIRECTION_NONE}>None</option>
                            <option value = {AnimationType.DIRECTION_LEFT_TO_RIGHT}>Left to Right</option>
                            <option value = {AnimationType.DIRECTION_RIGHT_TO_LEFT}>Right to Left</option>
                            <option value = {AnimationType.DIRECTION_TOP_TO_BOTTOM}>Top to Bottom</option>
                            <option value = {AnimationType.DIRECTION_BOTTOM_TO_TOP}>Bottom to Top</option>
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

       