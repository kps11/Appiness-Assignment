import {GET_ERROR} from '../Actions/Types'
const initialState ={}


export default function (state = initialState,action) {
    switch(action.type){
        case GET_ERROR:
            console.log(action.type)
            console.log(action.payload)
            return{
                ...state,
                errors:"username or paswword is wrong"
            }

        default:
            return state
    }

}