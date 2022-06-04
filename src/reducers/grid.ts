export const gridReducer = (state: gridType, action: actionType) => {
    switch (action.type) {
        case 'UPDATE_STARS':
            return {
                ...state,
                stars: action.payload.stars
            }
        case 'UPDATE_NUMBERS':
            return {
                ...state,
                numbers: action.payload.numbers,
            }
        default:
            return state
    }
};
