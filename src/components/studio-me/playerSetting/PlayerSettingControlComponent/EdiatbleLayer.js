import React from 'react'

class EditableLayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contentEditable: false,
            currentValue: props.cardName,
        }
    }

    render() {
        const content = this.state.contentEditable ? this.getEditableContent() : this.getContent();

        return <>{content}</>
    }

    getContent = () => {
        return (
            <div style={this.props.contentStyle} onDoubleClick={this.onDoubleClickHandler}> {this.state.currentValue} </div>
        );
    }

    getEditableContent = () => {
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
    }

    onBlueHandler = (event) => {
        this.setState({ contentEditable: false });
        this.props.getLatestValue(event.target.value);
    }

    onChangeHandler = (event) => {
        this.setState({ currentValue: event.target.value });
    }

    onDoubleClickHandler = () => {
        this.setState({ contentEditable: true });
    }

    onFocusHandler = (event) => {
        event.target.value = "";
        event.target.value = this.state.currentValue;
    }
}

export default EditableLayer;