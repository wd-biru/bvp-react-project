import React from 'react';
import logo from '../../../assets/img/me/studio-bvp-logo.png';
import createoverlay from '../../../assets/img/me/createoverlay-top.png';
import createoverlay1 from '../../../assets/img/me/createoverlay-top1.png';
import createoverlay2 from '../../../assets/img/me/createoverlay-top2.png';
import createoverlay3 from '../../../assets/img/me/createoverlay-top3.png';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as showSavePopup from "../../../apiAction/Alert/AlertActions";
import SavePopup from '../../popup/SavePopup';
import { postService,getService } from '../../../services/RequestService';
import { SAVE_TEMPLATE,GET_ALL_TEMPLATE } from '../../../services/api-endpoints';



class PlayerSettingHeader extends  React.Component{

    constructor(props){
        super(props);
    }
componentDidMount = () => {
    let params = {
        user_id : localStorage.getItem('userId')
    }
    getService(GET_ALL_TEMPLATE,params,(result)=>console.log(result))
}
saveAsNewTemplates = ()=>{

    this.props.showSavePopup('Save Template','Save The Template')
}
saveNewTemplate = () => {
    const { hideAlert,templateName,widgetList } = this.props;
    
    let userId  = localStorage.getItem('userId')
    if(templateName){
        let template_id =  Math.floor(Math.random()*10000);
        let payload = {
            user_id : userId,
            template_id : template_id,
            template_data : {
                templaeName:templateName, 
                template: widgetList
            }
        }
        postService(SAVE_TEMPLATE,JSON.stringify(payload),this.getSaveTemplateResult)
    }else{
        alert("enter tenmplate name")
    }
    hideAlert();
}
getSaveTemplateResult = (result) => {
    console.log("result",result)
   
}
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
                    <input type="button" name="" value="SAVE AS A NEW TEMPLATE" className="UPLOAD" onClick = {this.saveAsNewTemplates} />
                </span>
            </li>  
        </ul> 
        <ul className="navbar-nav ml-auto mr-auto my-2 my-lg-0">
            <li className="nav-item">
                <span href="" className="nav-link"><img src={createoverlay} /></span>
            </li>
            <li className="nav-item">
                <span href=""  className="nav-link"><img src={createoverlay1} /></span>
            </li> 
            <li className="nav-item">
                <span href=""  className="nav-link"><img src={createoverlay2} /></span>
            </li>
            <li className="nav-item">
                <span href=""  className="nav-link"><img src={createoverlay3} /></span>
            </li>
        </ul>
    </nav>
    <SavePopup saveAction = {this.saveNewTemplate} />
</header>
)
    }
}


const mapStateToProps = ( state )=>{
    return {
        widgetList : state.controlReducer.widgetsList,
        showPopup : state.saveReducer.showSavePopup,
        templateName : state.saveReducer.popupData
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(showSavePopup,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(PlayerSettingHeader);