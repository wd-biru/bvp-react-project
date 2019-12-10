import {playerActionConsts} from './PlayerControlAction';

const initialState = {
    widgetsList: []
};

const defaultWidgetDetail = {
    widgetType: null,
    xPosition: null,
    yPosition: null,
    name: 'layer1',
    width: 10,
    height: 10,
    imageData: null,
    isSelected: false
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
            defaultWidgetDetail.xPosition = 50;
            defaultWidgetDetail.yPosition = 50;
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
           /*
            let currentObject = {...state.widgetsList[action.widgetPosition]};
            currentObject.xPosition = action.xPosition;
            currentObject.xPosition = data.y;*/

            return { ...state, ...{ widgetsList: newArray } };

        }

        case playerActionConsts.PLAYER_SELECTION_UPDATE: {
            const { widgetsList } = state;
            let newArray = widgetsList.slice();
            newArray.forEach((widgetDetail, index) => {
                let isSelected = false;
                if (index === action.index) {
                    isSelected = true;
                }
                widgetDetail.isSelected = isSelected;
            })
            return { ...state, ...{ widgetsList: newArray } };
        }

        default:
            return state;
    }
}