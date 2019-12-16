export const playerActionConsts = {
    PLAYER_UPDATE: "PLAYER_UPDATE",
    PLAYER_DELETE: "PLAYER_DELETE",
    PLAYER_ADD: "PLAYER_ADD",
    PLAYER_COPY: "PLAYER_COPY",
    PLAYER_DRAG_REORDER: 'PLAYER_DRAG_REORDER',
    PLAYER_DRAG_UPDATE:'PLAYER_DRAG_UPDATE',
    PLAYER_SELECTION_UPDATE:'PLAYER_SELECTION_UPDATE',
    PLAYER_NAME_EDIT : 'PLAYER_NAME_EDIT',
    PLAYER_RESIZE_POSITION : 'PLAYER_RESIZE_POSITION',
SELECTION_EDIT : 'SELECTION_EDIT'
};

export function updatePlayerActionData(data) {
    return {
        type: playerActionConsts.PLAYER_UPDATE,
        data : data
    };
}

export function addPlayerActionData(data) {
    return {
        type: playerActionConsts.PLAYER_ADD,
        data,
    };
}

export function copyPlayerActionData(index) {
    return {
        type: playerActionConsts.PLAYER_COPY,
        index
    };
}

export function deletePlayerActionData(index) {
    return {
        type: playerActionConsts.PLAYER_DELETE,
        index
    };
}

export function dragPlayerActionData(dragindex,hoverindex) {
    return {
        type: playerActionConsts.PLAYER_DRAG_REORDER,
        dragindex,
        hoverindex
    };
}

export function updateDragPosition(xPosition, yPosition, widgetPosition){
    return {
        type : playerActionConsts.PLAYER_DRAG_UPDATE,
        xPosition : xPosition,
        yPosition : yPosition,
        widgetPosition : widgetPosition
    };
}



export function updateReSizePosition(width, height, widgetPosition){
    return {
        type : playerActionConsts.PLAYER_RESIZE_POSITION,
        width : width,
        height : height,
        widgetPosition : widgetPosition

    };
}

export function updateSelection(index){
    return {
        type : playerActionConsts.PLAYER_SELECTION_UPDATE,
        index:index
    };
}

export function editName(index,updateName){
    return {
        type : playerActionConsts.PLAYER_NAME_EDIT,
        index:index,
        updateName : updateName
    };
}

export function editSelection(index){
    return {
        type : playerActionConsts.SELECTION_EDIT,
        index:index,
    };
}
export default {
    playerActionConsts
};
