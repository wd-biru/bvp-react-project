import React from 'react';
import Widget from "../studio-me/playerSetting/Widget";

class VideoPreview extends React.Component {

    getWidthAndHeight = () => {
        const {widgetsList} = this.props;
        let smallestWidgetWidthPosition = 1200;
        let smallestWidgetHeightPosition = 800;
        let maxWidth = 0;
        let maxHeight = 0;
        widgetsList.forEach((widget) => {
            if (smallestWidgetWidthPosition > widget.xPosition)
                smallestWidgetWidthPosition = widget.xPosition

            if (maxWidth < (widget.xPosition + widget.width))
                maxWidth = (widget.xPosition + widget.width);

            if (smallestWidgetHeightPosition > (widget.yPosition )) {
                smallestWidgetHeightPosition = (widget.yPosition);
            }

            if(maxHeight < ((widget.yPosition )+ widget.height)){
                maxHeight = ((widget.yPosition)+ widget.height);
            }


        })


        let widthHeight = {
            width: (maxWidth - smallestWidgetWidthPosition),
            height: (maxHeight - smallestWidgetHeightPosition),
            smallestWidgetWidthPosition: smallestWidgetWidthPosition,
            smallestWidgetHeightPosition : smallestWidgetHeightPosition
        }

        return widthHeight;
    }

    render() {
        const {widgetsList} = this.props;
        const videoPositionConfig = this.getWidthAndHeight();
        return (
            <div className='video-preview-class'
                 style={{width: videoPositionConfig.width + 'px', height: videoPositionConfig.height + 'px'}}>
                {
                    widgetsList.map((widget, index) => <GetWidgetLayser videoPositionConfig={videoPositionConfig}
                                                                        widget={widget} zIndex={widgetsList.length - index}/>)
                }
            </div>
        );
    }
}

export default VideoPreview;


const GetWidgetLayser = (props) => {
    const {widget, zIndex, videoPositionConfig} = props;


    const styles = {
        width: widget.width + 'px',
        height: widget.height + 'px',
        left: (widget.xPosition - videoPositionConfig.smallestWidgetWidthPosition) + 'px',
        top: ((widget.yPosition) - videoPositionConfig.smallestWidgetHeightPosition ) + 'px',
        zIndex: zIndex,
        position: 'absolute'
    }

    return (
        <div style={styles}>
            <Widget isPlayer widget={widget}/>
        </div>

    );
}

