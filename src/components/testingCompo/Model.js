import React from 'react';
import './style.css';

class Model extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>

				<div class="modal" id="myModal">
				    <div class="modal-dialog">
				      <div class="modal-content">
				      
				       
				        <div class="modal-header text-center">
				          <h4 class="modal-title">Enter Project Name</h4>
				          <button type="button" onClick={this.props.closePopup} class="close" data-dismiss="modal">&times;</button>
				        </div>
				        
				        
				        <div class="modal-body">
				            <form id="login-form" class="form" action="" method="post">
				                <div class="form-group">
				                    <input type="text" name="username" id="username" class="form-control" placeholder="Project Name" />
				                </div>
				                <div class="form-group text-center">
				                    <a href="studio.html"><input type="button" name="submit" class="btn btn-info btn-md modal-btn" value="CREATE" /> </a>
				                </div>
				            </form>
				        </div>
				        
				      </div>
				    </div>
				  </div>




        </div>
      </div>
    );
  }
}

export default Model;