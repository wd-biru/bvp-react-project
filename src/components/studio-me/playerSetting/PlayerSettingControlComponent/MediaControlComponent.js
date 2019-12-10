import React from 'react';
import * as constants from '../WidgetType';
import ImageComponent from './ImageComponent';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import CustomInputFile from '../../../CommonComponents/CustomInputFile';
import '../../../../assets/css/custom_input.css';
import * as playerControlAction from "../../../../apiAction/Player/PlayerControlAction";


class MediaControlComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedOption : null,
            selectedImages : null
        };
        this.onDoubleClickHandler = this.onDoubleClickHandler.bind(this);
        this.onPlayControlSelectHandler = this.onPlayControlSelectHandler.bind(this);
    }

    handelImageUpload = (event) => {
        if (event.target.files && event.target.files[0]) {
            const image = event.target.files[0];
            let reader = new FileReader();
            reader.onload = () => {
                const imageUrl = reader.result;
                const defaultWidgetDetail = {
                    widgetType: constants.PLAY_BUTTON_DROPDOWN_OPTION,
                    xPosition: 50,
                    yPosition: 50,
                    name: 'layer1',
                    width: 50,
                    height: 50,
                    imageData: imageUrl
                }
                this.props.updatePlayerActionData(defaultWidgetDetail);
            };
            reader.readAsDataURL(image);
        }
    }

    render() {
        let images = [];
        if(this.state.selectedOption === constants.WIDGET_TYPE_PALY_BUTTON)
            images = importAll(require.context('../../../../assets/img/me/VideoControlButton/PlayButton', false, /\.(png|jpe?g|svg)$/));
        else if(this.state.selectedOption === constants.WIDGET_TYPE_FORWARD_BUTTON)
            images = importAll(require.context('../../../../assets/img/me/VideoControlButton/ForwardButton', false, /\.(png|jpe?g|svg)$/));
        else if(this.state.selectedOption === constants.WIDGET_TYPE_BACK_BUTTON)
            images = importAll(require.context('../../../../assets/img/me/VideoControlButton/BackButton', false, /\.(png|jpe?g|svg)$/));
        else if(this.state.selectedOption === constants.WIDGET_TYPE_SOUND_BUTTON)
            images = importAll(require.context('../../../../assets/img/me/VideoControlButton/SoundButton', false, /\.(png|jpe?g|svg)$/));
        else if(this.state.selectedOption === constants.WIDGET_TYPE_FULL_SCREEN_BUTTON)
            images = importAll(require.context('../../../../assets/img/me/VideoControlButton/FullScreen', false, /\.(png|jpe?g|svg)$/));


        return(
            <form >
                <div className="form-group">
                    <select className="form-control" onChange = {this.onPlayControlSelectHandler}>
                        <option>Controls</option>
                        <option value={constants.WIDGET_TYPE_PALY_BUTTON} >Play</option>
                        <option value={constants.WIDGET_TYPE_FORWARD_BUTTON} >Forward</option>
                        <option value={constants.WIDGET_TYPE_BACK_BUTTON} >Back</option>
                        <option value={constants.WIDGET_TYPE_SOUND_BUTTON} >Sound</option>
                        <option value={constants.WIDGET_TYPE_FULL_SCREEN_BUTTON} >Full Screen</option>
                    </select>
                </div>
                <div className="form-group">
                    <div>images</div>
                    <div>
                        <ImageComponent images={images} onDoubleClickHandler={this.onDoubleClickHandler} type={this.state.selectedOption}/>
                        <CustomInputFile onChange={this.handelImageUpload} title="upload own image"/>

                    </div>
                </div>
            </form>
        );
    }
    onPlayControlSelectHandler(event){
        this.setState({selectedOption : event.target.value});
    }

    onDoubleClickHandler(e, image) {
        const widgetDetail = {
            widgetType: this.state.selectedOption,
            imageData: image,
            width: 50,
            height: 50,
            name: 'layer1',
            xPosition: null,
            yPosition: null
        }
        this.props.updatePlayerActionData(widgetDetail);
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(playerControlAction, dispatch);
}

export default connect(null, mapDispatchToProps)(MediaControlComponent);

function importAll(r) {
    return r.keys().map(r);
}

