import React from 'react';
import logo from '../../../assets/img/me/studio-bvp-logo.png';
import createoverlay from '../../../assets/img/me/createoverlay-top.png';
import createoverlay1 from '../../../assets/img/me/createoverlay-top1.png';
import createoverlay2 from '../../../assets/img/me/createoverlay-top2.png';
import createoverlay3 from '../../../assets/img/me/createoverlay-top3.png';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as showSavePopup from "../../../apiAction/Alert/AlertActions";
import * as PlayerControlAction from '../../../apiAction/Player/PlayerControlAction'
import SavePopup from '../../popup/SavePopup';
import {postService, getService} from '../../../services/RequestService';
import * as urlConstants from '../../../services/api-endpoints';
import * as AnimationType from '../../Constants/Constant';
import * as WidgetTypes from '../../../components/studio-me/playerSetting/WidgetType'

class PlayerSettingHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        const projectConfigParams = {
            user_id: localStorage.getItem('userId'),
            project_id : sessionStorage.getItem('projectId')
        }
        getService(urlConstants.GET_TEMPLATE_ID_BASED_PROJECT_ID, projectConfigParams,this.getAllTemplate)
    }

    getTemplate = (result) => {
        if(result && result[0]){
            let templateDetail = JSON.parse(result[0].text_file)

        
            this.props.playerStoreTemplate(templateDetail.template,result[0].template_id)
        }else{
            this.props.playerStoreTemplate([
                {
                    widgetType: WidgetTypes.WIDGET_TYPE_DEFAULT_VIDEO,
                    xPosition: 340,
                    yPosition: 220,
                    name: 'video layer',
                    width: 564,
                    height: 320,
                    minWidth : 100,
                    minHeight : 100,
                    imageData: null,
                    otherData : null,
                }
            ],0)
        }

    }

    getAllTemplate= (result) => {
        if(result && result[0]){
            const params = {
                user_id: localStorage.getItem('userId'),
                template_id: result[0].template_id
            }
            getService(urlConstants.GET_ALL_TEMPLATE, params, this.getTemplate)
        }else{
            this.props.playerStoreTemplate(
                [
                    {
                        widgetType: WidgetTypes.WIDGET_TYPE_DEFAULT_VIDEO,
                        xPosition: 340,
                        yPosition: 220,
                        name: 'video layer',
                        width: 564,
                        height: 320,
                        minWidth : 100,
                        minHeight : 100,
                        imageData: null,
                        otherData : null,
                    }
                ],0)
        }


    }

    saveAsNewTemplates = () => {

        this.props.showSavePopup('Save Template', 'Save The Template')
    }

    saveNewTemplate = () => {
        const {hideAlert, templateName, widgetList} = this.props;

        let userId = localStorage.getItem('userId')
        if (templateName) {
           
            let payload = {
                user_id: userId,
                project_id : sessionStorage.getItem('projectId'),
                template_data: {
                    templaeName: templateName,
                    template: widgetList
                }
            }
            postService(urlConstants.SAVE_TEMPLATE, JSON.stringify(payload), this.getSaveTemplateResult)
        } else {
            alert("enter tenmplate name")
        }
        hideAlert();
    }

    saveExistingTemplate = () => {
        let userId = localStorage.getItem('userId');

        let template_id = this.props.templateId
        
        let payload = {
            user_id: userId,
            template_id: template_id,
            action : template_id ? 'update' : 'save',
            template_data: {
                templaeName: "testing",
                template: this.props.widgetList
            }
        }
        console.log(payload)
        postService(urlConstants.SAVE_TEMPLATE, JSON.stringify(payload), this.getSaveTemplateResult)
    }

    getSaveTemplateResult = (result) => {
        console.log("result", result)
        if( result.data){
            let data = {
                template_id : result.data,
                project_id : sessionStorage.getItem('projectId'),
                user_id : localStorage.getItem('userId'),
                template_data: {
                    templaeName: "testing",
                    template: this.props.widgetList
                }
            }
    
             postService(urlConstants.ASSOCIATE_PROJECT_TEMPLATE, JSON.stringify(data), (result) => {
                console.log(result)
            }) 
    
        }
     
    }

    render() {
        return (
            <header className="createoverlay_head">
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <p className="navbar-brand" href="dashboard.html"><img src={logo} alt="BVP"
                                                                           className="studio logo-menu"/></p>
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
                    <input type="button" name="" value="SAVE" onClick={this.saveExistingTemplate} className="SYNC"
                           data-toggle="modal" data-target="#myModal"/>
                </span>
                        </li>
                        <li className="nav-item">
                <span href="#" className="nav-link">
                    <input type="button" name="" value="SAVE AS A NEW TEMPLATE" className="UPLOAD"
                           onClick={this.saveAsNewTemplates}/>
                </span>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto mr-auto my-2 my-lg-0">
                        {/*<li className="nav-item">*/}
                        {/*    <span href="" className="nav-link"><img src={createoverlay}/></span>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <span href="" className="nav-link"><img src={createoverlay1}/></span>
                        </li>
                        <li className="nav-item">
                            <span href="" className="nav-link"><img src={createoverlay2}/></span>
                        </li>
                        <li className="nav-item">
                            <span href="" className="nav-link"><img src={createoverlay3}/></span>
                        </li>
                    </ul>
                </nav>
                <SavePopup saveAction={this.saveNewTemplate}/>
            </header>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        widgetList: state.controlReducer.widgetsList,
        showPopup: state.saveReducer.showSavePopup,
        templateName: state.saveReducer.popupData,
        templateId : state.controlReducer.templateId
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...showSavePopup, ...PlayerControlAction}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerSettingHeader);