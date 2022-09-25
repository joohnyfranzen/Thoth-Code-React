export default (state = { value: '' }, action ) => {

    switch (action.type) {
        case 'SET_TOKEN':
            return state = { value : action.value };
        default: 
            return state
    }

}