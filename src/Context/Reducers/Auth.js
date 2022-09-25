export default (state = { value: '' }, action ) => {

    switch (action.type) {
        case 'SET_TOKEN':
            return state = { value : action.value };
        case 'SET_TOKEN_OUT':
            return state = {value : ''}
        default: 
            return state
    }

}