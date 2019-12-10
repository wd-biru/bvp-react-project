import React, {Component} from 'react';

class CustomInputFile extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.reset = this.reset.bind(this);

    }

    render() {

        return (
            <div>
                <label htmlFor="input-file-id"
                       className={'custom-input-file ' + (this.props.className ? this.props.className : '')}
                       title={this.props.title}>
                    {this.props.title}</label>
                <input id='input-file-id' style={{display:'none'}} ref={this.inputRef}  type="file" accept="image/*" onChange={this.props.onChange}/>
            </div>
        );
    }

    reset() {
        //  need to write reset code by using ref
    }
}

export default CustomInputFile;