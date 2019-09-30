import React from 'react'

const Model = () => {
    return (
        <div>
   <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header text-center">
          <h4 className="modal-title">Enter Project Name</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        {/* Modal body */}
        <h2>THis is </h2>
        <div className="modal-body">
            <form id="login-form" className="form" action="" method="post">
                <div className="form-group">
                    <input type="text" name="username" id="username" className="form-control" placeholder="Project Name" />
                </div>
                <div className="form-group text-center">
                    <a href="studio.html"><input type="button" name="submit" className="btn btn-info btn-md modal-btn" value="CREATE" /></a>
                </div>
            </form>
        </div>
      </div>
    </div>
  </div>
  {/* <h1>this is model</h1> */}
        </div>
    )
}

export default Model;
