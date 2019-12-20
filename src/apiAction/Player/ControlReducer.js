import {playerActionConsts} from './PlayerControlAction';
import * as WidgetTypes from '../../components/studio-me/playerSetting/WidgetType'

const initialState = {
    widgetsList: [
        {
            widgetType: WidgetTypes.WIDGET_TYPE_DEFAULT_VIDEO,
            xPosition: 340,
            yPosition: -520,
            name: 'video layer',
            width: 564,
            height: 320,
            minWidth : 100,
            minHeight : 100,
            imageData: null,
            otherData : null,
        }
    ],
    selectedWidget : 0,
    templateId : 0
};

const defaultWidgetDetail = {
    widgetType: null,
    xPosition: null,
    yPosition: null,
    name: 'layer1',
    width: 10,
    height: 10,
    minWidth : 10,
    minHeight : 10,
    imageData: null,
    otherData : null,
}

export default function controlReducer(state = initialState, action) {
    switch (action.type) {
        case playerActionConsts.PLAYER_ADD:
            return {};
        case playerActionConsts.PLAYER_DELETE: {

            let widgetsList = state.widgetsList;
            if (widgetsList) {
                const firstArr = widgetsList.slice(0, action.index);
                const secondArr = widgetsList.slice(action.index + 1);
                widgetsList = [...firstArr, ...secondArr];
            }
            return {...state, widgetsList: widgetsList};
        }
        case playerActionConsts.PLAYER_COPY: {
            let data = state.widgetsList;


            if (data) {
                const firstArr = data;
                const lastArr = data.splice(action.index + 1, 0, {...data[action.index]});
                data = [...firstArr, ...lastArr];
            }
            return {...state, widgetsList: data};
        }

        case playerActionConsts.PLAYER_UPDATE: {
            defaultWidgetDetail.widgetType = action.data.widgetType;
            defaultWidgetDetail.xPosition = 100;  //action.data.xPosition;
            defaultWidgetDetail.yPosition = -500; //action.data.yPosition;
            defaultWidgetDetail.name = action.data.name;
            defaultWidgetDetail.width = 50;
            defaultWidgetDetail.height = 50;
            defaultWidgetDetail.minWidth = action.data.minWidth || 10
            defaultWidgetDetail.minHeight = action.data.minHeight || 10

            defaultWidgetDetail.imageData = action.data.imageData;
            defaultWidgetDetail.otherData = action.data.otherData
            let newArray = state.widgetsList.slice();
            newArray.splice(state.widgetsList.length, 0, {...defaultWidgetDetail});
            return {...state, widgetsList: newArray};
        }

      case playerActionConsts.PLAYER_EDIT : {
          let selectedWidget = state.widgetsList[action.widgetIndex]
        
          selectedWidget["otherData"] = action.data.otherData
          let newArray = state.widgetsList.slice();
          newArray.splice(action.widgetIndex,1,{...selectedWidget});
          
          return {...state , widgetsList: newArray};
      }
      case playerActionConsts.PLAYER_STORE_TEMPLATE : {
      
        let newArray = action.data
        
        return {...state , widgetsList: newArray ,templateId : action.templateId};
      }
      case playerActionConsts.PLAYER_DRAG_REORDER: {
        const { widgetsList } = state;
        let newArray = widgetsList.slice();
        let reomvedArray = newArray.splice(action.dragindex, 1);
        newArray = newArray.slice();
        newArray.splice(action.hoverindex, 0, {...reomvedArray[0]});
        return { ...state, ...{ widgetsList: newArray } };
      }

        case playerActionConsts.PLAYER_DRAG_UPDATE : {
            const { widgetsList } = state;
            let newArray = widgetsList.slice();
            let reomvedArray = newArray.splice(action.widgetPosition, 1);
            newArray = newArray.slice();
            reomvedArray[0].xPosition = action.xPosition;
            reomvedArray[0].yPosition = action.yPosition;
            newArray.splice(action.widgetPosition, 0, reomvedArray[0]);
            return { ...state, ...{ widgetsList: newArray } };
        }
        case playerActionConsts.PLAYER_RESIZE_POSITION : {
            const { widgetsList } = state;
            let newArray = widgetsList.slice();
            let reomvedArray = newArray.splice(action.widgetPosition, 1);
            newArray = newArray.slice();
            reomvedArray[0].width = action.width;
            reomvedArray[0].height = action.height;
            newArray.splice(action.widgetPosition, 0, reomvedArray[0]);
            return { ...state, ...{ widgetsList: newArray } };
        }


        case playerActionConsts.PLAYER_SELECTION_UPDATE: {
      
            return { ...state, ...{ selectedWidget: action.index } };

        }

        case playerActionConsts.PLAYER_NAME_EDIT :{
            const { widgetsList } = state;
            let newArry = widgetsList.slice();
            let newobj = newArry[action.index];
            newArry.splice(action.index, 1);
            newobj.name = action.updateName;
            newArry.splice(action.index, 0, newobj);
            return { ...state, ...{ widgetsList: newArry } };
        }
   case playerActionConsts.SELECTION_EDIT : {

            return { ...state, ...{ selectedWidget: action.index } };
        }
        default:
            return state;
    }
}