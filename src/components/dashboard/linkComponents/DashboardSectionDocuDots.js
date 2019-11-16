import React, { Component } from 'react';

class HoverExample extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <div>
        <div className="card-close"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          +++
        </div>
        {
          
          this.state.isHovering &&
            <div className="container fuild dropdown">
                <div className="row">
                    <div className="col-sl-03">
                       <a href="#"><h1>This is colsal 03</h1></a>
                    </div>
                    <div className="col-sl-03">
                        <h1>This is colsal 06</h1>
                    </div>
                    <div className="col-sl-03">
                        <h1>This is colsal 03</h1>
                    </div>
                </div>
            </div>
          
        }
      </div>
    );
  }
}

export default HoverExample;