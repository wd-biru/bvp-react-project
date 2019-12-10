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

class PlayerSettingSection1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-sm-1 createoverlay-one playerSetting-one">
                <ul>
                    {getOverlaySides().map(data=><li><span onDoubleClick={() =>this.handleDoubleClickHandler(data)} href="#" title="Square Shape"><img src={data.imageURL}/></span></li>)}
                </ul>
            </div>
        );
    }

    handleDoubleClickHandler = (data) =>{
        this.props.updatePlayerActionData( {
            widgetType: data.widgetType,
            name: data.name,
            imageData : data.imageURL
        });
    }

}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(playerControlAction, dispatch);
}

export default connect(null, mapDispatchToProps)(PlayerSettingSection1);

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
