import React from 'react'

class EditableInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false,
        }

        this.myRef = React.createRef();

    }
    enterPressed(event) {

        var code = event.keyCode || event.which;
        if(code === 13) {
            this.setState({editable: false});
            this.props.getLatestValue(this.props.index, event.target.value);
        }
    }
    onBlueHandler = (event) => {
        this.setState({editable: false});
        // this.props.getLatestValue(this.props.index, event.target.value);
    }
    render() {
        if (this.state.editable)
            return (
                <input
                    autoFocus={true}
                    onBlur={this.onBlueHandler}
                    onFocus={this.onFocusHandler}
                    onKeyPress={this.enterPressed.bind(this)}
                    type={"text"}
                    ref={this.myRef }
                />
            );
        return <div style={this.props.contentStyle}
                    onDoubleClick={this.onDoubleClickHandler}> {this.props.cardName} </div>

    }

    componentDidMount() {
        if(this.myRef  && this.myRef.current){
            this.myRef.current.value = this.props.cardName;
        }
    }
    componentDidUpdate() {
        if(this.state.editable){
            this.myRef.current.value = this.props.cardName;
        }
    }




    onDoubleClickHandler = () => {
        this.setState({editable: true});
    }

    onFocusHandler = (event) => {

    }
}

export default EditableInput;