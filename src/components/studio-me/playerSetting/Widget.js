import React from 'react';
import WidgetUtils from './WidgetUtils';
import classNames from 'classnames';
import '../../../assets/css/widget.css';
class Widget extends React.Component {
    constructor(props) {
        super(props);
        this.onWidgetSelectHandler = this.onWidgetSelectHandler.bind(this);
    }

    render() {
        const layerStyle = classNames({
            'selected': this.props.widget && this.props.widget.isSelected
        })
        return (
            <div  className={layerStyle} onClick={this.onWidgetSelectHandler}>
                <WidgetUtils widget={this.props.widget} />
            </div>
        );
    }

    // @TO-DO
    onWidgetSelectHandler(){
        console.log("selected");
    }
}

export default Widget;
