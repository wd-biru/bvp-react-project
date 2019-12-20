import React from 'react';
import DraggableCustomComponent from "../studio-me/playerSetting/DesignArea/DraggableCustomComponent";
import Widget from "../studio-me/playerSetting/Widget";
import Video from "../../assets/img/me/video-test.mp4";

class VideoPreview extends React.Component {

    render() {
        const {widgetsList} = this.props;

        return (
            <div className='video-preview-class'>
                {
                    widgetsList.map((widget, index) => <GetWidgetLayser widget={widget} length ={index} index={index}/>)
                }
            </div>
        );
    }
}

export default VideoPreview;


const GetWidgetLayser = (props) => {
    const {widget, length} = props;
    const styles = {
        width: widget.width+'px',
        height: widget.height+'px',
        left : widget.xPosition+'px',
        top : (707 + widget.yPosition)+'px',
        zIndex : length+1,
        position : 'absolute'
    }

    return (
        <div style={styles}>
            <Widget isPlayer widget={widget}/>
        </div>

    );
}

