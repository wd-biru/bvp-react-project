import React from 'react';
import '../../../../components/studio-me/playerSetting/PlayerSettingControlComponent/player-settings.css';
import images1 from '../../../../assets/img/me/createoverlay-top6.png';
import images2 from '../../../../assets/img/me/createoverlay-top7.png';
import Card from './Card';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as playerActions from '../../../../apiAction/Player/PlayerControlAction';
import EditableInput from "../../../CommonComponents/EditableInput";
import classNames from "classnames";

class LayersComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.callBackHandler = this.callBackHandler.bind(this);
        this.renderCard = this.renderCard.bind(this);
        this.onGetLatestValue = this.onGetLatestValue.bind(this);
        this.onWidgetSelectHandler = this.onWidgetSelectHandler.bind(this);
    }

    render() {
        return (
            <>
                <div>{this.props.widgetList.map((card, i) => this.renderCard(card, i, this.callBackHandler))}</div>
            </>
        );
    }

    onGetLatestValue(index, updateName) {
        this.props.editName(index, updateName);
    }

    callBackHandler(dragIndex, hoverIndex) {
        this.props.dragPlayerActionData(dragIndex, hoverIndex);
    }

    onWidgetSelectHandler(index) {
        this.props.editSelection(index);
    }

    renderCard(card, index, callBackFunction) {
        if (!card)
            return;

        const layerStyle = classNames({
            'layer-selected': index === this.props.selectedIndex
        })
        return (
            <Card
                key={index}
                index={index}
                id={index}

                text={

                    <div className={layerStyle} onClick={() => {
                        this.onWidgetSelectHandler(index);
                    }}>>
                        <div style={{display: 'inline-block', padding: '5px'}}><span
                            style={{width: '10px'}}>{index + 1}</span></div>
                        <EditableInput cardName={card.name} index={index}
                                       getLatestValue={this.onGetLatestValue}
                                       contentStyle={{
                                           display: 'inline-block',
                                           padding: '5px',
                                           width: 'calc(100% - 65px)'
                                       }}/>
                        <div style={{float: 'right', margin: '5px'}}>
                            <span><img onClick={() => this.props.handleCopy(index)} src={images1}
                                       className="layer-img"/></span>
                            <span><img onClick={() => this.props.handleDelete(index)} src={images2}
                                       className="layer-img"/></span>
                        </div>
                    </div>
                }
                moveCard={callBackFunction}
            />
        );
    };
}

function mapStateToProps(state) {
    return {
        widgetList: state.controlReducer.widgetsList,
        selectedIndex: state.controlReducer.selectedWidget
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(playerActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LayersComponent);


