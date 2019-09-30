import React from 'react'

const ModelPopup = () => {
    return (
        <div>
            <div className="modal" id="myModalfolder">
                <div className="modal-dialog">
                <div className="modal-content">
                    {/* Modal Header */}
                    <div className="modal-header text-center">
                    <h4 className="modal-title">Enter Folder Name</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body">
                        <form id="login-form" className="form" action="" method="post">
                            <div className="form-group">
                                <input type="text" name="username" id="username" className="form-control" placeholder="Folder Name" />
                            </div>
                            <div className="form-group text-center">
                                <a href="#"><input type="button" name="submit" className="btn btn-info btn-md modal-btn" value="CREATE" data-dismiss="modal" /></a>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            {/* <h1>this is model popup</h1> */}
        </div>
    )
}

export default ModelPopup;
