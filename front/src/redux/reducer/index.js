/* const initialState = {
    changedPage:0
}

const rootReducer = (state=initialState, action)=>{
    switch (action.type) {
        case "CHANGE_PAGE":
            if(state.changedPage===0){
            return{
                ...state,
                changedPage:1
            }
        }else{
            return{
                ...state,
                changedPage:0
            }
        }
            default:
            return state
    }
}
export default rootReducer; */