import React from 'react';
import createoverlayside1 from "../../../assets/img/me/createoverlay-side1.png";
import createoverlayside2 from "../../../assets/img/me/createoverlay-side2.png";
import createoverlayside3 from "../../../assets/img/me/createoverlay-side3.png";
import createoverlayside4 from "../../../assets/img/me/createoverlay-side4.png";
import createoverlayside5 from "../../../assets/img/me/createoverlay-side5.png";
import createoverlayside6 from "../../../assets/img/me/createoverlay-side6.png";
import createoverlayside7 from "../../../assets/img/me/createoverlay-side7.png";
import createoverlayside8 from "../../../assets/img/me/createoverlay-side8.png";
import createoverlayside9 from "../../../assets/img/me/createoverlay-side9.png";
import createoverlayside10 from "../../../assets/img/me/createoverlay-side10.png";
import * as WidgetTypes from './WidgetType';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as playerControlAction from "../../../apiAction/Player/PlayerControlAction";
import { popupAction,hidePopup } from '../../../apiAction/actions/commonActions';
import * as alertActions from  '../../../apiAction/Alert/AlertActions';
import ActionPopup from '../../popup/ActionPopup';
import AddWidgetPopup from '../../popup/AddWidgetPopup';
import * as widgetPopupActions from '../../../apiAction/WidgetPopup/WidgetPopupAction';
import {getWidgetNameByType} from './WidgetUtils';
import * as constants from '../../Constants/Constant';

class PlayerSettingSection1 extends React.Component {
    constructor(props) {
        super(props);
        handleInputFileChange = handleInputFileChange.bind(this);
        handleDoubleClickHandler = handleDoubleClickHandler.bind(this);

    }

    render() {
        return (
            <div className="col-sm-1 createoverlay-one playerSetting-one">
                <ul>
                    {getOverlaySides().map((data, index)=>{
                        return <li draggable={() =>onDragAllowHandler(data.widgetType)} onDragStart={(event) =>onDragHandler(event, data.widgetType)} key={index}>
                           {getWidgetChildrens(data)}
                            </li>
                            })
                    }
                    <ActionPopup />
                    <AddWidgetPopup/>
                </ul>
            </div>
        );
    }

   
}
const onDragAllowHandler = (type) =>{
    switch (type){
        case WidgetTypes.WIDGET_TYPE_IMAGE:
            return 'false';
        default :
            return 'true';
    }

}

const onDragHandler = (event, type) =>{
    const widgetDetail = {
        widgetType: type,
        width : 50,
        height: 50,
        otherData : {
            backgroundColor : 'white'
        },
        name: getWidgetNameByType(type)
    }
    event.dataTransfer.setData('widgetDetail', JSON.stringify(widgetDetail));
}

const mapStateToProps = (state) => {
    return {
        widgetList : state.controlReducer.widgetsList,
        showPopup : state.saveReducer.showSavePopup
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...playerControlAction,...alertActions,popupAction,hidePopup, ...widgetPopupActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSettingSection1);

const getOverlaySides = () =>{
    return [
        {
            widgetType : WidgetTypes.WIDGET_TYPE_SQUARE_BOX,
            imageURL : createoverlayside1,
            name: 'Square Shape'
        },
        {
            widgetType : WidgetTypes.WIDGET_TYPE_CIRCLE,
            imageURL : createoverlayside2,
            name : 'Circle'
        },
        // {
        //     widgetType : WidgetTypes.WIDGET_TYPE_CUSTOM_SHAPE,
        //     imageURL : createoverlayside9,
        //     name : 'Custom Shape'
        // },
        {
            widgetType : WidgetTypes.WIDGET_TYPE_TEXT,
            imageURL : createoverlayside3,
            name : 'Text'
        },
        {
            widgetType : WidgetTypes.WIDGET_TYPE_IMAGE,
            imageURL : createoverlayside4,
            name : 'Image'
        },
        // {
        //     widgetType : WidgetTypes.WIDGET_TYPE_ARROW_LOOP,
        //     imageURL : createoverlayside5,
        //     name : 'Arrow Loop'
        // },
        // {
        //     widgetType : WidgetTypes.WIDGET_TYPE_VIDEO,
        //     imageURL : createoverlayside6,
        //     name : 'Video'
        // },
      /*  {
            widgetType : WidgetTypes.WIDGET_TYPE_SLIDER,
            imageURL : createoverlayside10,
            name : 'Image / Video slider'
        },*/
        {
            widgetType : WidgetTypes.WIDGET_TYPE_MAP,
            imageURL : createoverlayside7,
            name : 'Map'
        },
        {
            widgetType : WidgetTypes.WIDGET_TYPE_IFRAME,
            imageURL : createoverlayside8,
            // name : 'Web Programming',
            name : 'I frame'
        }

    ];
};

const getWidgetChildrens = (widget) => {
    switch (widget.widgetType) {
        case WidgetTypes.WIDGET_TYPE_PALY_BUTTON:
            return <span onDoubleClick={() => handleDoubleClickHandler(widget)} href="#" title={widget.name}><img src={widget.imageURL} /></span>

        case WidgetTypes.WIDGET_TYPE_IMAGE:
             
            return <span onClick={() => handleDoubleClickHandler(widget)} href="#" title={widget.name}><img src={widget.imageURL} />
                <input type="file" id="file" onClick = {refreshInputDialog} style = {{display : 'none'}} accept="image/x-png,image/gif,image/jpeg" onChange = {(event) => handleInputFileChange(event,widget)}/>
            </span>

        default:
            return <span onClick={() => handleDoubleClickHandler(widget)}  href="#" title={widget.name}><img src={widget.imageURL} /></span>;
    }
}
// function onDropHandler(event){
//
//     const {updatePlayerActionData, widgetsList, showAlert} = this.props;
//     let widgetDetail = event.dataTransfer.getData("widgetDetail");
//     if(widgetDetail){
//         widgetDetail = JSON.parse(widgetDetail);
//         let isNotPresent = false;
//         if(widgetsList){
//             isNotPresent = widgetsList.find(element => element.widgetType == widgetDetail.widgetType);
//         }
//         if(!isNotPresent){
//             widgetDetail['xPosition'] = event.pageX - event.currentTarget.offsetLeft;
//             widgetDetail['yPosition'] = event.pageY - event.currentTarget.offsetTop;
//             updatePlayerActionData(widgetDetail);
//         }else{
//             showAlert('error', 'adding duplicate action is not allowed');
//         }
//
//     }
// }

function refreshInputDialog(){
    document.getElementById('file').value = null;
}   
function handleDoubleClickHandler(data){
    if(data.widgetType === WidgetTypes.WIDGET_TYPE_TEXT){
        this.props.popupAction('Text Configuration');
    }
    else if(data.widgetType === WidgetTypes.WIDGET_TYPE_IMAGE){
        document.getElementById('file').click();
    }else if(data.widgetType === WidgetTypes.WIDGET_TYPE_IFRAME){
        this.props.showWidgetPopupAlert(constants.I_FRAME_HEADING,constants.I_FRAME_BODY_NAME,WidgetTypes.WIDGET_TYPE_IFRAME);
    }
    else if(data.widgetType === WidgetTypes.WIDGET_TYPE_MAP){
        this.props.showWidgetPopupAlert(constants.MAP_HEADING,constants.MAP_BODY_NAME,WidgetTypes.WIDGET_TYPE_MAP);
    }
    else if(data.widgetType === WidgetTypes.WIDGET_TYPE_SQUARE_BOX){
        this.props.showWidgetPopupAlert(constants.SQUARE_SHAPE_HEADING,null,WidgetTypes.WIDGET_TYPE_SQUARE_BOX);
    }
    else if(data.widgetType === WidgetTypes.WIDGET_TYPE_CIRCLE){
        this.props.showWidgetPopupAlert(constants.CIRCLE_SHAPE_HEADING,null,WidgetTypes.WIDGET_TYPE_CIRCLE);

    }

}

function handleInputFileChange(event,data){
    const image = event.target.files[0];

        if (image.type.indexOf('image') >= 0) {
            if (event.target.files && event.target.files[0]) {

                let reader = new FileReader();
                    reader.onload =() =>  {
                        let defaultWidgetDetail = {
                            widgetType: data.widgetType,
                            xPosition: 50,
                            yPosition: 50,
                            name: getWidgetNameByType(data.widgetType),
                            width: 50,
                            height: 50,
                            imageData: reader.result
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
            
            }
        }else{
            this.props.showAlert("Wrong Image Formate", "The image you uploaded is not in .png formate");
        }
}
