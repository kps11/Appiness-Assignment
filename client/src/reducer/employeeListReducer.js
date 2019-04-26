import {GET_EMPLOYEE_DATA} from '../Actions/Types'

const initialState ={
    employeedata:{}
}

export default function (state = initialState,action) {
    switch(action.type){
        case GET_EMPLOYEE_DATA:
            console.log('Kshirod', action.payload)
            return {
                ...state,
                employeedata:action.payload
            }
        default:
            return state
    }

}