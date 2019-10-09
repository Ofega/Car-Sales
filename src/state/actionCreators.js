import * as types from './actionTypes';

export const removeFeature = item => {
    return {
        type: types.ADD_FEATURE,
        payload: {
            id: item.id
        }
    }
};

export const buyItem = item => {

    console.log(item)
    return {
        type: types.ADD_FEATURE,
        payload: {
            id: item.id,
            name: item.name,
            price: item.price
        }
    }
};