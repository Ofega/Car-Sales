import * as types from './actionTypes';

export const removeFeature = item => {
    return {
        type: types.REMOVE_FEATURE,
        payload: {
            id: item.id,
            price: item.price
        }
    }
};

export const buyItem = item => {
    return {
        type: types.ADD_FEATURE,
        payload: {
            id: item.id,
            name: item.name,
            price: item.price
        }
    }
};