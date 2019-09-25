import React from 'react'

function StudioFooterPart1() {
    return (
            <div className="container-fluid Studioed-section2">
                <div className="tool">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="small-view">
                                <li><a href="#" title="Storyboard View"><img src="img/me/tool-1.png"/></a></li>
                                <li><a href="#" title="Timeline View" className="active"><img src="img/me/tool-2.png" /> </a></li>
                                <li><a href="#" title="Customize Toolbar"><img src="img/me/tool-3.png" /></a></li>
                                <li><a href="#" title="Undo"><img src="img/me/tool-4.png" /></a></li>
                                <li><a href="#" title="Redo"><img src="img/me/tool-5.png" /></a></li>
                                <li><a href="#" title="Record/Capture Option"><img src="img/me/tool-6.png" /></a></li>
                                <li><a href="#" title="Sound Mixer"><img src="img/me/tool-7.png" /></a></li>
                                <li><a href="#" title="Track Motion"><img src="img/me/tool-8.png" /></a></li>
                                <li><a href="#" title="Subtitle Editor"><img src="img/me/tool-9.png" /></a></li>
                                <li><a href="#" title="Multi-Camera Editor"><img src="img/me/tool-10.png" /></a></li>
                                <li><a href="#" title="Time Remapping"><img src="img/me/tool-11.png" /></a></li>
                                <li><a href="#" title="Mask Creator"><img src="img/me/tool-12.png" /></a></li>
                                <li><a href="#" title="Pan and Zoom"><img src="img/me/tool-13.png" /></a></li>
                                <li><a href="#" title="Split Screen Template Creator"><img src="img/me/tool-14.png" /></a></li>
                                <li><a href="#" title="Add Hotspots" onclick="displayHotspot()"><img src="img/me/addhotspot.png" className="icon" /> </a></li>
                                <li><a href="#" data-toggle="modal" data-target="#myModalHotspots"  title="Hotspots Design"><img src="img/me/hotspotdesign.png" className="icon" /> </a></li>
                                <li><a href="#" data-toggle="modal" data-target="#myModal" title="Preview"><img src="img/me/preview.png" className="icon" /></a></li>
                            </ul>
                            
                            <ul className="my-2 my-lg-0">
                                <li><a href="#" title="Zoom Out"><img src="img/me/tool-15.png" /></a></li>
                                <li> <a href="#"><img src="img/me/tool-16.png" /></a></li>
                                <li> <a href="#" title="Zoom In"><img src="img/me/tool-17.png" /></a></li>
                                <li><a href="#" title="Fit Project in Timeline Window"><img src="img/me/tool-18.png" /></a></li>  
                                <li><a href="#" title="Project Duration"><img src="img/me/tool-19.png" /></a></li> 
                                <li><a href="#" title="Project Duration">00:00:00:01</a></li> 
                            </ul>
                        </div>
                    </div>
                </div>
</div>


      
    )
}

export default StudioFooterPart1;
