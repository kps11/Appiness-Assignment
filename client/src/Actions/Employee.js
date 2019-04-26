import {_getUsers} from '../Utils/UserData'
import {GET_EMPLOYEE_DATA} from './Types'



export function getEmployeeData (){
          return(dispatch) =>{
            return  _getUsers().then((user) =>{
                dispatch({
                    type:GET_EMPLOYEE_DATA,
                    payload:user
                })
             })
          }
}
