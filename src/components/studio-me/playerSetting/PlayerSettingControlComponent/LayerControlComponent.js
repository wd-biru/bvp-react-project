import React from "react";
import createoverlay6 from "../../../../assets/img/me/createoverlay-top6.png";
import createoverlay7 from "../../../../assets/img/me/createoverlay-top7.png";
import { connect } from 'react-redux';
import LayersComponent from '../PlayerSettingControlComponent/LayersComponent';
import { bindActionCreators } from 'redux';
import * as playerActions from '../../../../apiAction/Player/PlayerControlAction';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'
import { popupAction} from '../../../../apiAction/actions/commonActions';

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
        this.props.popupAction("Text Configuration",selectedWidget);

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
    return bindActionCreators({ ...playerActions, popupAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LayerControlComponent);