import React from 'react';
import GridViewLink from './GridViewLink';
const GridView = () => {
    return (
        <section className="tables grid-view">            
              <div className="container-fluid">
                <div className="tab-content">
                    <div className="tab-pane container active col-lg-12" id="homedemo">
                      <div className="table-responsive">
                        <table id="example" className="table table-striped table-bordered" >
                          <thead>
                              <tr>
                                  <th>Name</th>
                                  <th>Date modified</th>
                                  <th>Size</th>
                                  <th>Type</th>
                                  <th>Date Added</th>
                              </tr>
                          </thead>
                         <GridViewLink />
                         <GridViewLink />
                         <GridViewLink />
                         <GridViewLink />
                         <GridViewLink />
                         <GridViewLink />
                         <GridViewLink />
                         <GridViewLink />
                         <GridViewLink />
                         <GridViewLink />
                         <GridViewLink />
                         <GridViewLink />
                         <GridViewLink />
                         <GridViewLink />
                         <GridViewLink />
                         <GridViewLink />
                          <tfoot>
                              <tr>
                                  <th>Name</th>
                                  <th>Date modified</th>
                                  <th>Size</th>
                                  <th>Type</th>
                                  <th>Date Added</th>
                              </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                </div>
              </div>
            </section>
    )
}

export default GridView;
