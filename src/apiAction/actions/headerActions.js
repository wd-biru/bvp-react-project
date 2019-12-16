import{ alertActionConstants } from '../Alert/AlertActions';

export function saveTemplate(name){
    return {
        type: alertActionConstants.CHANGE_DATA,
        payload : name
    };
}