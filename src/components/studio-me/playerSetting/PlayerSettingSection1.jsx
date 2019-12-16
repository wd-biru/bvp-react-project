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
                        return <li key={index}>
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
        {
            widgetType : WidgetTypes.WIDGET_TYPE_CUSTOM_SHAPE,
            imageURL : createoverlayside9,
            name : 'Custom Shape'
        },
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
        {
            widgetType : WidgetTypes.WIDGET_TYPE_ARROW_LOOP,
            imageURL : createoverlayside5,
            name : 'Arrow Loop'
        },
        {
            widgetType : WidgetTypes.WIDGET_TYPE_VIDEO,
            imageURL : createoverlayside6,
            name : 'Video'
        },
        {
            widgetType : WidgetTypes.WIDGET_TYPE_SLIDER,
            imageURL : createoverlayside10,
            name : 'Image / Video slider'
        },
        {
            widgetType : WidgetTypes.WIDGET_TYPE_MAP,
            imageURL : createoverlayside7,
            name : 'Map'
        },
        {
            widgetType : WidgetTypes.WIDGET_TYPE_WEB_PROGRAM,
            imageURL : createoverlayside8,
            name : 'Web Programming'
        }

    ];
};

const getWidgetChildrens = (widget) => {
    switch (widget.widgetType) {
        case WidgetTypes.WIDGET_TYPE_PALY_BUTTON:
            return <span onDoubleClick={() => handleDoubleClickHandler(widget)} href="#" title={widget.name}><img src={widget.imageURL} /></span>

        case WidgetTypes.WIDGET_TYPE_IMAGE:
             
            return <span onDoubleClick={() => handleDoubleClickHandler(widget)} href="#" title={widget.name}><img src={widget.imageURL} />
                <input type="file" id="file" style = {{display : 'none'}} accept="image/x-png,image/gif,image/jpeg" onChange = {(event) => handleInputFileChange(event,widget)}/>
            </span>

        default:
            return <span onDoubleClick={() => handleDoubleClickHandler(widget)} href="#" title={widget.name}><img src={widget.imageURL} /></span>;
    }
}


function handleDoubleClickHandler(data){
    if(data.widgetType === WidgetTypes.WIDGET_TYPE_TEXT){
        this.props.popupAction("Text Configuration");
    }
    else if(data.widgetType === WidgetTypes.WIDGET_TYPE_IMAGE){
        document.getElementById('file').click();
    }
    else if(data.widgetType === WidgetTypes.WIDGET_TYPE_WEB_PROGRAM ||
        data.widgetType === WidgetTypes.WIDGET_TYPE_MAP
    ){
        this.props.showWidgetPopupAlert();
    }
}

function handleInputFileChange(event,data){
    const image = event.target.files[0];

        if (image.type.indexOf('image') >= 0) {
            if (event.target.files && event.target.files[0]) {
            
                    let reader = new FileReader();
                    reader.onload = () => {
                        const imageUrl = reader.result;
                        const defaultWidgetDetail = {
                            widgetType: data.widgetType,
                            xPosition: 50,
                            yPosition: 50,
                            name: getWidgetNameByType(data.widgetType),
                            width: 50,
                            height: 50,
                            imageData: imageUrl
                        }
                        this.props.updatePlayerActionData(defaultWidgetDetail);
                    };
                    reader.readAsDataURL(image);
            
            }
        }else{
            this.props.showAlert("Wrong Image Formate", "The image you uploaded is not in .png formate");
        }
}
