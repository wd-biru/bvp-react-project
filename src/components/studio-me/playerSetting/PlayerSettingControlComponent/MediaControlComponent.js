import React from 'react';
import * as constants from '../WidgetType';
import ImageComponent from './ImageComponent';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import CustomInputFile from '../../../CommonComponents/CustomInputFile';
import '../../../../assets/css/custom_input.css';
import * as playerControlAction from "../../../../apiAction/Player/PlayerControlAction";
import * as alertActions from "../../../../apiAction/Alert/AlertActions";
import {getWidgetNameByType} from '../WidgetUtils';
import * as stringConstants from '../../../Constants/Constant';

class MediaControlComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: constants.WIDGET_TYPE_PALY_BUTTON,
            selectedImages: null
        };
        this.onDoubleClickHandler = this.onDoubleClickHandler.bind(this);
        this.onPlayControlSelectHandler = this.onPlayControlSelectHandler.bind(this);
    }

    handelImageUpload = (event) => {
        let isPresent = this.props.widgetList.find(element => element.widgetType == this.state.selectedOption)
        if (isPresent) {
            this.props.showAlert("testing title", "testing message");
            return;
        }

        if (event.target.files && event.target.files[0]) {
            const image = event.target.files[0];
            if (image.type === 'image/png') {
                let reader = new FileReader();
                reader.onload = () => {
                    const imageUrl = reader.result;
                    const defaultWidgetDetail = {
                        widgetType: this.state.selectedOption,
                        xPosition: 50,
                        yPosition: 50,
                        name: getWidgetNameByType(this.state.selectedOption),
                        width: 50,
                        height: 50,
                        imageData: imageUrl
                    }
                    let img = new Image;
                    img.onload = ()=>{
                        defaultWidgetDetail.width = img.width;
                        defaultWidgetDetail.height = img.height;
                        this.props.updatePlayerActionData(defaultWidgetDetail);
                    };
                    img.src = reader.result;
                };
                reader.readAsDataURL(image);
            } else {
                this.props.showAlert("Wrong Image Formate", "The image you uploaded is not in .png formate");
            }

        }
    }

    render() {
        let images = [];
        if (this.state.selectedOption === constants.WIDGET_TYPE_PALY_BUTTON)
            images = importAll(require.context('../../../../assets/img/me/VideoControlButton/PlayButton', false, /\.(png|jpe?g|svg)$/));
        else if (this.state.selectedOption === constants.WIDGET_TYPE_FORWARD_BUTTON)
            images = importAll(require.context('../../../../assets/img/me/VideoControlButton/ForwardButton', false, /\.(png|jpe?g|svg)$/));
        else if (this.state.selectedOption === constants.WIDGET_TYPE_BACK_BUTTON)
            images = importAll(require.context('../../../../assets/img/me/VideoControlButton/BackButton', false, /\.(png|jpe?g|svg)$/));
        else if (this.state.selectedOption === constants.WIDGET_TYPE_SOUND_BUTTON)
            images = importAll(require.context('../../../../assets/img/me/VideoControlButton/SoundButton', false, /\.(png|jpe?g|svg)$/));
        else if (this.state.selectedOption === constants.WIDGET_TYPE_FULL_SCREEN_BUTTON)
            images = importAll(require.context('../../../../assets/img/me/VideoControlButton/FullScreen', false, /\.(png|jpe?g|svg)$/));


        return (
            <form>
                <div className="form-group">
                    <label>Controls</label>
                    <select className="form-control" onChange={this.onPlayControlSelectHandler}>
                        {/*<option>Controls</option>*/}
                        <option value={constants.WIDGET_TYPE_PALY_BUTTON}>Play</option>
                        <option value={constants.WIDGET_TYPE_FORWARD_BUTTON}>Forward</option>
                        <option value={constants.WIDGET_TYPE_BACK_BUTTON}>Back</option>
                        <option value={constants.WIDGET_TYPE_SOUND_BUTTON}>Sound</option>
                        <option value={constants.WIDGET_TYPE_FULL_SCREEN_BUTTON}>Full Screen</option>
                    </select>
                </div>
                <div className="form-group">
                    <div>
                        <ImageComponent images={images} onDoubleClickHandler={this.onDoubleClickHandler}
                                        type={this.state.selectedOption}/>
                        {images.length ?
                            <CustomInputFile onChange={this.handelImageUpload} title="upload own image"/> : null}

                    </div>
                </div>
            </form>
        );
    }

    onPlayControlSelectHandler(event) {
        this.setState({selectedOption: event.target.value});
    }

    onDoubleClickHandler(e, image) {
        const widgetDetail = {
            widgetType: this.state.selectedOption,
            imageData: image,
            width: 50,
            height: 50,
            name: getWidgetNameByType(this.state.selectedOption),
            xPosition: null,
            yPosition: null
        }
        let isPresent = this.props.widgetList.find(element => element.widgetType == this.state.selectedOption)
        if (isPresent) {
            this.props.showAlert(stringConstants.SIMPLE_ERROR_TITLE, stringConstants.ERROR_DUPLICATE_WIDGET);

        } else {
            this.props.updatePlayerActionData(widgetDetail);
        }

    }
}

function mapStateToProps(state) {

    return {
        widgetList: state.controlReducer.widgetsList
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...playerControlAction, ...alertActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaControlComponent);

function importAll(r) {
    return r.keys().map(r);
}

