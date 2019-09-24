import React from 'react';

const PageTopHeader = () => {
          return(
            
               <header className="page-header">
                  <div className="container-fluid">
                    <h2 className="no-margin-bottom">Home</h2>
                    <div className="secund-menu-button">
                      <input type="button" name="" value="CREATE PROJECT" className="SYNC" data-toggle="modal" data-target="#myModal" />
                      <a href="upload.html"><input type="button" name="" value="UPLOAD" className="UPLOAD" /></a>
                    </div>
                  </div>
                </header>
                
                )
        }
        export default PageTopHeader;



// import React, { Component } from 'react';
// import Popup from './components/Model';

// class PageTopHeader extends Component {
//   constructor(props){
//   super(props);
//   this.state = { showPopup: false };
//   }

//   togglePopup() {
//    this.setState({
//      showPopup: !this.state.showPopup
//    });
//  }

//   render() {
//     return (
      
//  <header className="page-header">
//       <div className="container-fluid">
//         <h2 className="no-margin-bottom">Home</h2>
//       </div> 
//       <div>
//          <button onClick={this.togglePopup.bind(this)} name="" value="CREATE PROJECT" className="SYNC" >
//             Click To Launch Popup</button>
//            <a href="upload.html">
//              <input type="button" name="" value="UPLOAD" className="UPLOAD" />
//              </a>
//             {this.state.showPopup ?
//              <Popup
//                 text='Close'
//                 closePopup={this.togglePopup.bind(this)}
//                   />
//                : null
//             }
//       </div>
// </header>

//     );
//   }
// }
// export default PageTopHeader;