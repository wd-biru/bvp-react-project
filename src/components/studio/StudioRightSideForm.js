import React from 'react'



const StudioRightSideForm = () => {
    return (
		<div className="table-responsive two"> 
                       <div className="studio_form" >
                         <form action="">
							  <div className="form-group">
							    <label for="email">Video Name</label>
							    <input type="text" className="form-control studiotext" id="studiotext" placeholder="Video Name" />
							  </div>
							  <div className="form-group">
							    <label for="email">Description</label>
							    <textarea className="form-control" rows="5" id="comment" placeholder="Please Enter Description"></textarea>
							  </div>							  
							</form>
                       </div>
					   
       </div>
    )
}

export default StudioRightSideForm;



