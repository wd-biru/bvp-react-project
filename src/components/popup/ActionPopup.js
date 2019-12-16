import React from 'react';
import { Modal, Button ,Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as alertActions from '../../apiAction/Alert/AlertActions';
import {hidePopup, popupAction} from '../../apiAction/actions/commonActions';
import '../../assets/css/custom_modal.css';
import {getFontFamily} from "../ActionComponent/TextActionHelper";
import {ChromePicker} from "react-color";
import '../../assets/css/TextAction.css';
import * as playerControlAction from "../../apiAction/Player/PlayerControlAction";
import * as WidgetType from '../studio-me/playerSetting/WidgetType';
import {getWidgetNameByType } from '../studio-me/playerSetting/WidgetUtils';
let applyStyle = {
    border : '1px solid black',
    padding : '0 4px 0 4px'
}
class ActionPopup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            background: 'blue',
            textBackgroundColor: 'rgba(244, 244, 244, 0)',
            textColor: 'rgba(219, 227, 222, 1)',
            textValue: '',
            textFont: 'Times New Roman',
            textSize: 36,
            bold: false,
            italic: false,
            underline: false,
            colorPickerX: 0,
            colorPickerY: 0
        }
    }

    selectTextStyle = (state) =>{
        let stateValue = {};
        stateValue[state]= !this.state[state]
        this.setState(stateValue);
    }
    handleChangeComplete = (color) => {
        if(this.state.pickerTarget == 'TextColor'){
            this.setState({
                textColor : `rgba(${color.rgb.r}, ${color.rgb.g},${color.rgb.b}, ${color.rgb.a})`,
                background : `rgba(${color.rgb.r}, ${color.rgb.g},${color.rgb.b}, ${color.rgb.a})`
            })
        }else if(this.state.pickerTarget == 'TextBackColor'){
            this.setState({
                textBackgroundColor : `rgba(${color.rgb.r}, ${color.rgb.g},${color.rgb.b}, ${color.rgb.a})`,
                background :  `rgba(${color.rgb.r}, ${color.rgb.g},${color.rgb.b}, ${color.rgb.a})`
            })
        }
    }
    handleOutSideClick = (e)=> {
        this.setState({
            colorPicker : false
        })
    }

    chooseColor = (e,type)=>{
        e.stopPropagation();
        this.setState({
            colorPicker : true,
            colorPickerX : 0,
            colorPickerY : 0,
            pickerTarget : type
        })

    }

    changehandler = (event,type) => {
        this.setState({
            ['text'+type] : event.target.value
        })
    }
    render() {
        const { showModel, alertTitle, hideAlert} = this.props;
        const { textColor, bold, italic, underline, background, textBackgroundColor, colorPickerX, colorPickerY } = this.state;

        return(
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                dialogClassName = "custom-modal-style"
                onHide = {hideAlert}
                show = {showModel}  
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {alertTitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div onClick={this.handleOutSideClick}>

                        <div className="text-container">
                            <label className="left-feild" >Text</label>
                            <input type="text" onChange={(e) => this.changehandler(e, 'Value')} ></input>
                        </div>
                        <div className="text-container">
                            <label className="left-feild">Font</label>
                            <select selected="selected" style={{ width: '182px' }} onChange={(e) => this.changehandler(e, 'Font')}>
                                {getFontFamily().map((element, index) => (
                                    <option key={index} style={{ fontFamily: element }}>{element}</option>
                                ))}
                            </select>
                        </div>
                        <div className="text-container">
                            <label className="left-feild">Font Size</label>
                            <select style={{ width: '182px' }} onChange={(e) => this.changehandler(e, 'Size')}>
                                {[...Array(300).keys()].map((element, index) =>
                                    {
                                        if(this.state.textSize === element+1 ){
                                            return (<option key={index} style={{ fontFamily: element }} selected >{element+1}</option>)
                                        }
                                        else{
                                            return (<option key={index} style={{ fontFamily: element }}>{element+1}</option>)
                                        }
                                    }
                                )}
                            </select>
                        </div>
                        <div className="text-container">
                            <label className="left-feild" >styles</label>

                            <label className="text-edit-label-btn" style={bold ? { ...applyStyle, fontWeight: "bold" } : { fontWeight: "bold", border: "0px" }} onClick={() => this.selectTextStyle('bold')}>B</label>
                            <label className="text-edit-label-btn" style={italic ? { ...applyStyle, fontStyle: "italic" } : { fontStyle: "italic", border: "0px" }} onClick={() => this.selectTextStyle('italic')}>I</label>
                            <label className="text-edit-label-btn" style={underline ? { ...applyStyle, textDecoration: "underline" } : { textDecoration: "underline", border: "0px" }} onClick={() => this.selectTextStyle('underline')}>U</label>
                        </div>
                        <div className="text-container">
                            <label className="left-feild" >text color</label>
                            <div onClick={(event) => this.chooseColor(event, 'TextColor')} type="text" style={{ border: '1px solid', width: '100px', height: '25px', cursor: 'pointer', backgroundColor: textColor }}></div>
                        </div>
                        <div className="text-container">
                            <label className="left-feild" >background color</label>
                            <div onClick={(event) => this.chooseColor(event, 'TextBackColor')} type="text" style={{ border: '1px solid', width: '100px', height: '25px', cursor: 'pointer', backgroundColor: textBackgroundColor }}></div>
                        </div>

                        {this.state.colorPicker && <div onClick={(e) => e.stopPropagation()} style={{ position: 'absolute', top: colorPickerY, left: colorPickerX }}>
                            <ChromePicker
                                color={background}
                                onChangeComplete={this.handleChangeComplete}
                            />
                        </div>}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button disabled={!this.state.textValue} onClick={this.onSaveHandler}>Submit</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    onSaveHandler =() => {
        const { textValue, textColor,textFont, bold, italic, underline,textSize, textBackgroundColor } = this.state;

        const data = {
            widgetType: WidgetType.WIDGET_TYPE_TEXT,
            name: getWidgetNameByType(WidgetType.WIDGET_TYPE_TEXT),
            otherData: {
                textName : textValue,
                textFont : textFont,
                textSize : textSize,
                bold: bold,
                italic : italic,
                underline : underline,
                textBackgroundColor : textBackgroundColor,
                textColor : textColor,
            }
        }
        this.props.updatePlayerActionData(data);
        this.props.hidePopup();
    }

}

const mapStateToProps=(state)=>{
    return {
        showModel : state.actionPopupReducer.showActionPopup,
        alertMessage : state.actionPopupReducer.message,
        alertTitle : state.actionPopupReducer.title,
    };
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({...alertActions,...playerControlAction,popupAction, hidePopup}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionPopup);