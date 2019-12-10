import React from 'react'

class EditableInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false,
            currentValue: props.cardName,
        }
    }

    render() {
        if(this.state.editable)
            return (
                <input
                    autoFocus={true}
                    onBlur={this.onBlueHandler}
                    onChange={this.onChangeHandler}
                    onFocus={this.onFocusHandler}
                    type={"text"}
                    value={this.state.currentValue}
                />
            );
      return <div style={this.props.contentStyle} onDoubleClick={this.onDoubleClickHandler}> {this.state.currentValue} </div>

    }

    onBlueHandler = (event) => {
        this.setState({ editable: false });
     //   this.props.getLatestValue(event.target.value);
    }

    onChangeHandler = (event) => {
        this.setState({ currentValue: event.target.value });
    }

    onDoubleClickHandler = () => {
        this.setState({ editable: true });
    }

    onFocusHandler = (event) => {
        event.target.value = "";
        event.target.value = this.state.currentValue;
    }
}

export default EditableInput;