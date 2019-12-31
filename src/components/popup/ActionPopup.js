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
let localStates = [
    {key:'background',value:'blue'},{key:'textBackgroundColor',value:'rgba(244, 244, 244, 0)'},{key:'textColor',value:'rgba(219, 227, 222, 1)'},
    {key:'textName',value:''},{key:'textFont',value:'Times New Roman'},{key:'textSize',value:'32'},
    {key:'bold',value:false},{key:'italic',value:false},{key:'underline',value:false},
    {key:'colorPickerX',value:0},{key:'colorPickerY',value:0}
]
class ActionPopup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
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

    chooseColor = (e,type,color)=>{
        e.stopPropagation();
        this.setState({
            colorPicker : true,
            colorPickerX : 0,
            colorPickerY : 0,
            pickerTarget : type,
            background : color
        })

    }

    changehandler = (event,type) => {
        this.setState({
            ['text'+type] : event.target.value
        })
    }
    setDefaultLocalStates = ()=>{
        const{ alertpopupData } = this.props;
        if(alertpopupData){
           Object.keys(alertpopupData.otherData).forEach(key => {
               this.setState({
                   [key] : alertpopupData.otherData[key]
               })
           }) 
        }else{
            localStates.forEach(state => {
                this.setState({
                    [state.key] : state.value
                })
            })
        }
    }
    resetLocalStates = () => {
        localStates.forEach(state => {
            this.setState({
                [state.key] : state.value,
            })
        })
        this.setState({colorPicker : false})
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
                onEntered = {this.setDefaultLocalStates}
                onExited = {this.resetLocalStates}
                onClick={this.handleOutSideClick}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {alertTitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>

                        <div className="text-container">
                            <label className="left-feild" >Text</label>
                            <input value = {this.state.textName} type="text" onChange={(e) => this.changehandler(e, 'Name')} ></input>
                        </div>
                        <div className="text-container">
                            <label className="left-feild">Font</label>
                            <select selected="selected" style={{ width: '182px' }} onChange={(e) => this.changehandler(e, 'Font')}>
                                {getFontFamily().map((element, index) => (
                                    <option selected = {this.state.textFont == element ? true : false} key={index} style={{ fontFamily: element }}>{element}</option>
                                ))}
                            </select>
                        </div>
                        <div className="text-container">
                            <label className="left-feild">Font Size</label>
                            <select style={{ width: '182px' }} value={this.state.textSize} onChange={(e) => this.changehandler(e, 'Size')}>
                                {[...Array(300).keys()].map((element, index) =>
                                    {
                                        return (<option key={index} value={element+1} style={{ fontFamily: element }}>{element+1}</option>)
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
                            <div onClick={(event) => this.chooseColor(event, 'TextColor','rgba(219, 227, 222, 1)')} type="text" style={{ border: '1px solid', width: '100px', height: '25px', cursor: 'pointer', backgroundColor: textColor }}></div>
                        </div>
                        <div className="text-container">
                            <label className="left-feild" >background color</label>
                            <div onClick={(event) => this.chooseColor(event, 'TextBackColor','rgba(244, 244, 244, 0)')} type="text" style={{ border: '1px solid', width: '100px', height: '25px', cursor: 'pointer', backgroundColor: textBackgroundColor }}></div>
                        </div>

                        {this.state.colorPicker && <div onClick={(e) => e.stopPropagation()} style={{ position: 'absolute', top: 220, left: 192 }}>
                            <ChromePicker
                                color={background}
                                onChangeComplete={this.handleChangeComplete}
                                width ='160px'
                            />
                        </div>}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button disabled={!this.state.textName} onClick={this.onSaveHandler}>Submit</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    onSaveHandler =() => {
        const { textName, textColor,textFont, bold, italic, underline,textSize, textBackgroundColor } = this.state;
        const { alertpopupData,updatePlayerActionData,editPlayerActionData,hidePopup,xPosition,yPosition } = this.props;
        const data = {
            widgetType: WidgetType.WIDGET_TYPE_TEXT,
            name: getWidgetNameByType(WidgetType.WIDGET_TYPE_TEXT),
            otherData: {
                textName : textName,
                textFont : textFont,
                textSize : textSize,
                bold: bold,
                italic : italic,
                underline : underline,
                textBackgroundColor : textBackgroundColor,
                textColor : textColor,
            },
            xPosition:xPosition,
            yPosition:yPosition,
            width : 100,
            height : 50
        }
        if(alertpopupData){
            editPlayerActionData(data,alertpopupData.widgetIndex)
        }else{
            updatePlayerActionData(data);
        }
        
        hidePopup();
    }

}

const mapStateToProps=(state)=>{
    return {
        showModel : state.actionPopupReducer.showActionPopup,
        alertpopupData : state.actionPopupReducer.popupData,
        alertTitle : state.actionPopupReducer.title,
        xPosition:state.actionPopupReducer.xPosition,
        yPosition:state.actionPopupReducer.yPosition
    };
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({...alertActions,...playerControlAction,popupAction, hidePopup}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionPopup);