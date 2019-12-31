import React from 'react';
import MediaControlComponent from './PlayerSettingControlComponent/MediaControlComponent';
import LayerControlComponent from './PlayerSettingControlComponent/LayerControlComponent';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as alertActions from '../../../apiAction/Alert/AlertActions';
import * as AnimationType from '../../Constants/Constant';
import * as controlActions from '../../../apiAction/Player/PlayerControlAction'


class PlayerSettingSection3 extends React.Component{
    updateAnimation = (e,key) => {

        let defaultKey = key === 'direction' ? 'animation' : 'direction'
        const { widgetsList,selectedWidget,updateAnimation,updateAnimationData} = this.props;
        if(widgetsList[selectedWidget].animationData){
            updateAnimationData(
                {   
                    key ,
                    value : e.target.value
                },
                selectedWidget
            )
        }else{
            updateAnimation({
                [defaultKey] : 'None',
                [key] : e.target.value
            },selectedWidget)
        }
    }

    render(){
        const { showPlayerPreviewPopup ,widgetsList,selectedWidget} = this.props;
        let  animationData  = widgetsList[selectedWidget] && widgetsList[selectedWidget].animationData ? widgetsList[selectedWidget].animationData : null;

        return (
            <div className="col-sm-2 createoverlay-three playerSetting-three">
                <form>
                    <div className="form-group">
                        <label htmlFor="sel1">Global Animation</label>
                        {/* eslint-disable-next-line no-console */}
                        <select className="form-control" id="sel1" onChange={(e)=>this.updateAnimation(e,'animation')}>
                            <option selected = {animationData ? animationData.animation === AnimationType.GLOBAL_ANIMATION_NONE : false}
                            id = "sel1"value = {AnimationType.GLOBAL_ANIMATION_NONE}>None</option>
                            <option  selected = {animationData ? animationData.animation === AnimationType.GLOBAL_ANIMATION_FADE : false} value = {AnimationType.GLOBAL_ANIMATION_FADE} >Fade</option>
                            <option  selected = {animationData ? animationData.animation === AnimationType.GLOBAL_ANIMATION_SLIDE : false} value = {AnimationType.GLOBAL_ANIMATION_SLIDE}>Slide</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="sel1">Direction</label>
                        <select className="form-control" id="sel2" onChange={(e)=>this.updateAnimation(e,'direction')}>
                            <option selected = {animationData ? animationData.direction === AnimationType.DIRECTION_NONE : false} value = {AnimationType.DIRECTION_NONE}>None</option>
                            <option selected = {animationData ? animationData.direction === AnimationType.DIRECTION_LEFT_TO_RIGHT : false} value = {AnimationType.DIRECTION_LEFT_TO_RIGHT}>Left to Right</option>
                            <option selected = {animationData ? animationData.direction === AnimationType.DIRECTION_RIGHT_TO_LEFT : false} value = {AnimationType.DIRECTION_RIGHT_TO_LEFT}>Right to Left</option>
                            <option selected = {animationData ? animationData.direction === AnimationType.DIRECTION_TOP_TO_BOTTOM : false} value = {AnimationType.DIRECTION_TOP_TO_BOTTOM}>Top to Bottom</option>
                            <option selected = {animationData ? animationData.direction === AnimationType.DIRECTION_BOTTOM_TO_TOP : false} value = {AnimationType.DIRECTION_BOTTOM_TO_TOP}>Bottom to Top</option>
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

const mapStateToProps = state => ({
    widgetsList: state.controlReducer.widgetsList,
    selectedWidget : state.controlReducer.selectedWidget
  });
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...alertActions,...controlActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSettingSection3);

       