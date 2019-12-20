import React from "react";
import {Button} from "react-bootstrap";
import * as WidgetType from "../studio-me/playerSetting/WidgetType";
import {getWidgetNameByType} from "../studio-me/playerSetting/WidgetUtils";
import {bindActionCreators} from "redux";
import * as playerControlAction from "../../apiAction/Player/PlayerControlAction";
import * as widgetPopupActions from "../../apiAction/WidgetPopup/WidgetPopupAction";
import {connect} from "react-redux";
import * as WidgetTypes from "../studio-me/playerSetting/WidgetType";
import {ChromePicker} from "react-color";

class ShapeColourPopup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}

    }

    handleChangeComplete = (color) => {
        this.setState({
            textColor: `rgba(${color.rgb.r}, ${color.rgb.g},${color.rgb.b}, ${color.rgb.a})`,
            background: `rgba(${color.rgb.r}, ${color.rgb.g},${color.rgb.b}, ${color.rgb.a})`
        })
    }
    chooseColor = (e, color) => {
        e.stopPropagation();
        this.setState({
            colorPicker: true,
            colorPickerX: 0,
            colorPickerY: 0,
            background: color
        })

    }
    handleOutSideClick = (e) => {
        this.setState({
            colorPicker: false
        })
    }

    render() {
        const {background, colorPickerX, colorPickerY} = this.state;
        return (
            <>
                <div className="text-container" onClick={this.handleOutSideClick}>
                    <label className="left-feild">Colour</label>
                    <div onClick={(event) => this.chooseColor(event, 'rgba(219, 227, 222, 1)')}
                         type="text" style={{
                        border: '1px solid',
                        width: '100px',
                        height: '25px',
                        cursor: 'pointer',
                        backgroundColor: background
                    }}></div>
                </div>
                {this.state.colorPicker && <div onClick={(e) => e.stopPropagation()}
                                                style={{position: 'absolute', top: colorPickerY, left: colorPickerX}}>
                    <ChromePicker
                        color={background}
                        onChangeComplete={this.handleChangeComplete}
                    />
                </div>}
                <Button className='save-botton-button' onClick={this.onSaveHandler}>Submit</Button>
            </>
        );
    }


    onSaveHandler = () => {

        const widgetDetail = {
            widgetType: this.props.widgetType,
            width: 50,
            height: 50,
            otherData: {backgroundColor: this.state.background},
            name: getWidgetNameByType(this.props.widgetType),
        }
        this.props.updatePlayerActionData(widgetDetail);
        this.props.hideWidgetPopupAlert();

    }
}

const mapDispatchToPropsChild = (dispatch) => {
    return bindActionCreators({...playerControlAction, ...widgetPopupActions}, dispatch);
}

export default connect(null, mapDispatchToPropsChild)(ShapeColourPopup);