import React from 'react';
import '../../../../components/studio-me/playerSetting/PlayerSettingControlComponent/player-settings.css';
import images1 from '../../../../assets/img/me/createoverlay-top6.png';
import images2 from '../../../../assets/img/me/createoverlay-top7.png';
import Card from './Card';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playerActions from '../../../../apiAction/Player/PlayerControlAction';
import EditableInput from "../../../CommonComponents/EditableInput";

class LayersComponent extends React.PureComponent{
    constructor(props){
        super(props);
        this.callBackHandler = this.callBackHandler.bind(this);
        this.renderCard = this.renderCard.bind(this);
    }

    render(){
        return(
            <>
            <div >{this.props.widgetList.map((card, i) => this.renderCard(card, i, this.callBackHandler))}</div>
          </>
        );
    }

    callBackHandler(dragIndex, hoverIndex){
        console.log(dragIndex, hoverIndex);
        //const dragCard = this.props.widgetList[dragIndex];
        // setCards(
        //     update(this.props.widgetList, {
        //       $splice: [
        //         [dragIndex, 1],
        //         [hoverIndex, 0, dragCard],
        //       ],
        //     }),
        //   )
        // },
        this.props.dragPlayerActionData(dragIndex,hoverIndex);
        // [this.props.widgetList],

    }
    renderCard  (card, index, callBackFunction)  {
        if(!card)
            return;
        return (
          <Card
            key={index}
            index={index}
            id={index}

        text={
            <div>
            <div style={{display:'inline-block', padding:'5px'}}>{index+1}</div>
{/*
                <EditableInput cardName={card.name} contentStyle ={{display:'inline-block', padding:'5px'}} />
*/}
            <div style={{display:'inline-block', padding:'5px'}}>{card.name}</div>
            <span><img onClick={() => this.props.handleCopy(index)} src={images1} className="layer-img"/></span>
            <span><img onClick={()=>this.props.handleDelete(index)} src={images2} className="layer-img"/></span>
            <span><input type="radio" id="radio1" style={{verticalAlign: 'middle'}} name="optradio" value="option1" checked/></span>
        </div>


                }
            moveCard={callBackFunction }
          />
        );
      };
}

  function mapStateToProps(state){
    return {
        widgetList : state.controlReducer.widgetsList
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(playerActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LayersComponent);


