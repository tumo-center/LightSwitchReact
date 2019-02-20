const defaultState = {
    on : false
}

export const rootReducer = (state = defaultState,action) => {
    switch (action.type){
        case "TOGGLE" : 
            return {
                ...state,
                on: !state.on 
            }
            default: return state
    }
    

}