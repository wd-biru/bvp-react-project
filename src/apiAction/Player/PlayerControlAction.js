export const playerActionConsts = {
    PLAYER_UPDATE: "PLAYER_UPDATE",
    PLAYER_DELETE: "PLAYER_DELETE",
    PLAYER_ADD: "PLAYER_ADD",
    PLAYER_COPY: "PLAYER_COPY",
    PLAYER_DRAG: 'PLAYER_DRAG',
    PLAYER_DRAG_UPDATE:'PLAYER_DRAG_UPDATE',
    PLAYER_SELECTION_UPDATE:'PLAYER_SELECTION_UPDATE'
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
        type: playerActionConsts.PLAYER_DRAG,
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

export function updateSelection(index){
    return {
        type : playerActionConsts.PLAYER_SELECTION_UPDATE,
        index:index
    };
}

export default {
    playerActionConsts
};
