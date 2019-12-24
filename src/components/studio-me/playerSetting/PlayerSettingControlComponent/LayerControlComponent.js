import React from "react";
import { connect } from 'react-redux';
import LayersComponent from '../PlayerSettingControlComponent/LayersComponent';
import { bindActionCreators } from 'redux';
import * as playerActions from '../../../../apiAction/Player/PlayerControlAction';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'
import { popupAction} from '../../../../apiAction/actions/commonActions';
import * as WidgetTypes from '../WidgetType';
import * as widgetPopupActions from '../../../../apiAction/WidgetPopup/WidgetPopupAction'
import * as constants from '../../../Constants/Constant'


class LayerControlComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
    }

    handleDelete(index) {
        this.props.deletePlayerActionData(index);
    }

    handleCopy(index) {
        this.props.copyPlayerActionData(index);
    }
    handleEdit = (index) => {
        let selectedWidget = {...this.props.widgetList[index]};
        selectedWidget["widgetIndex"] = index;
        if(selectedWidget.widgetType === WidgetTypes.WIDGET_TYPE_TEXT){
            this.props.popupAction("Text Configuration",selectedWidget);
        }else if(selectedWidget.widgetType === WidgetTypes.WIDGET_TYPE_SQUARE_BOX){
            this.props.showWidgetPopupAlert(constants.SQUARE_SHAPE_HEADING, '', selectedWidget.widgetType , selectedWidget)
        }else if(selectedWidget.widgetType === WidgetTypes.WIDGET_TYPE_CIRCLE){
            this.props.showWidgetPopupAlert(constants.CIRCLE_SHAPE_HEADING, '', selectedWidget.widgetType , selectedWidget)

        }

    }

    render() {
        return (
            <>
                <div className="sectiomtwo">
                    <label>Layers</label>
                </div>

                <DndProvider backend={HTML5Backend}>
                    <LayersComponent handleEdit = {this.handleEdit} handleCopy={this.handleCopy} handleDelete={this.handleDelete}  name={this.props.widgetList} />
				</DndProvider>

                {/* {
                    this.props.widgetList.map((data,arrayIndex)=>{
                        return <LayersComponent handleCopy={this.handleCopy} handleDelete={this.handleDelete} arrayIndex={arrayIndex} name='data.name' />;
                    })
                } */}

            </>
        );
    }
}/*
const mapStateToProps = (state) =>{
    return {
        widgetList : state.controlReducer.widgetList
    };
};*/
function mapStateToProps(state){
    return {
        widgetList : state.controlReducer.widgetsList
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...playerActions, ...widgetPopupActions, popupAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LayerControlComponent);