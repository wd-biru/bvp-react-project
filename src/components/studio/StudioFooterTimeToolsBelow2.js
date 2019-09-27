import React from 'react'

function StudioFooterTimeToolsBelow2() {
    return (
        <div class="card">

            <div class="card-header" role="tab" id="headingOne3">
                <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne3" aria-expanded="true"
                    aria-controls="collapseOne3">
                    <p class="mb-0">
                    <div class="left-video"><i class="fa fa-text-height"></i></div>	
                    <div class="text">Title <i class="fas fa-check-square"></i></div> 
                    </p>
                </a>
            </div>
                <div id="collapseOne3" class="collapse" role="tabpanel" aria-labelledby="headingOne3"
                data-parent="#accordionEx">
                    <div class="card-body">
                        <a href="#">Demo1</a>
                        <hr class="hr1" />
                        <a href="#">Demo2</a>
                        <hr class="hr1" />
                        <a href="#">Demo3</a>
                    </div>
                </div>

        </div>

    )
}

export default StudioFooterTimeToolsBelow2;
