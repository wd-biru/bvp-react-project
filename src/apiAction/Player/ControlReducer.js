import {playerActionConsts} from './PlayerControlAction';

const initialState = {
    widgetsList: [],
    selectedWidget : 0
};

const defaultWidgetDetail = {
    widgetType: null,
    xPosition: null,
    yPosition: null,
    name: 'layer1',
    width: 10,
    height: 10,
    imageData: null,
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
                const lastArr = data.splice(action.index + 1, 0, data[action.index]);
                data = [...firstArr, ...lastArr];
            }
            return {...state, widgetsList: data};
        }

        case playerActionConsts.PLAYER_UPDATE: {
            defaultWidgetDetail.widgetType = action.data.widgetType;
            defaultWidgetDetail.xPosition = action.data.xPosition;
            defaultWidgetDetail.yPosition = action.data.yPosition;
            defaultWidgetDetail.name = action.data.name;
            defaultWidgetDetail.width = 50;
            defaultWidgetDetail.height = 50;
            defaultWidgetDetail.imageData = action.data.imageData;

            let newArray = state.widgetsList.slice();
            newArray.splice(state.widgetsList.length, 0, {...defaultWidgetDetail});
            return {...state, widgetsList: newArray};
        }

      case playerActionConsts.PLAYER_DRAG: {
        const { widgetsList } = state;
        let newArray = widgetsList.slice();
      //  let newPositionX =
        let reomvedArray = newArray.splice(action.dragindex, 1);
        newArray = newArray.slice();
        newArray.splice(action.hoverindex, 0, reomvedArray[0]);

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
            let removedArray = newArry.splice(action.index, 1);
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