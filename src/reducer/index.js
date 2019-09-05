const initState = {
  
    urlArray: [],
    input: '',
    searching: false,
    controller : new AbortController(),
    signal : (() => this.controller.signal)
}

const reducer = (state = initState, action) => {
    console.log('reducer', state.controller);
    
    switch(action.type) {       
        case "ADD_URL_LIST":
            console.log('state case', state);

            return {...state, urlArray: action.payload, searching: action.searching}
        case "CHANGE_INPUT":
            return {...state, input: action.payload}
        case "CHANGE_SEARCH_CONDITION":
            return {...state, searching: action.payload}
        default:      
            return {...state}
    }
}
export default reducer;