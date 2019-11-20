import React from 'react';
import logo from '../../../assets/img/me/studio-bvp-logo.png';
import createoverlay from '../../../assets/img/me/createoverlay-top.png';
import createoverlay1 from '../../../assets/img/me/createoverlay-top1.png';
import createoverlay2 from '../../../assets/img/me/createoverlay-top2.png';
import createoverlay3 from '../../../assets/img/me/createoverlay-top3.png';

class CreateOverLayHeader extends  React.Component{
render() {
    
return (
 <header className="createoverlay_head">
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <p className="navbar-brand" href="dashboard.html"><img src={logo} alt="BVP" className="studio logo-menu" /></p>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <button class="btn btn-primary BackBtn"
                onClick={this.props.cancelPlayerSetting}
                >
                <i class="fa fa-angle-double-left"></i>
                Back
                </button>
            </li>
        </ul>
        <ul className="navbar-nav ml-auto mr-auto">
           
            <li className="nav-item">
                <span href="#" className="nav-link">
                    <input type="button" name="" value="SAVE" className="SYNC" data-toggle="modal" data-target="#myModal" />
                </span>
            </li>
            <li className="nav-item"> 
                <span href="#" className="nav-link">
                    <input type="button" name="" value="SAVE AS A NEW TEMPLATE" className="UPLOAD" />
                </span>
            </li>  
        </ul> 
        <ul className="navbar-nav ml-auto mr-auto my-2 my-lg-0">
            <li className="nav-item">
                <span href="" className="nav-link"><img src={createoverlay} /></span>
            </li>
            <li className="nav-item">
                <span href=""  className="nav-link" 
                onClick={this.props.createOverLayModel} >
                    <img src={createoverlay1} /></span>
            </li> 
            <li className="nav-item">
                <span href=""  className="nav-link" >
                    <img src={createoverlay2} /></span>
            </li>
            <li className="nav-item">
                <span href=""  className="nav-link" >
                    <img src={createoverlay3} /></span>
            </li>
        </ul>
    </nav>
</header>
)
    }
}

export default CreateOverLayHeader;