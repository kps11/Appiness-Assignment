import axios from 'axios'
import {GET_ERROR ,SET_CURRENT_USER} from './Types'




//Login User

export const loginUser = userdata => dispatch =>{
    axios.post('http://localhost:5000/api/user/login',userdata)
        .then(res =>{
                dispatch({
                    type:SET_CURRENT_USER,
                    payload:res.data
                })

            })
        .catch(err =>{
            dispatch({
                type: GET_ERROR,
                payload: err.msg
            })
        })
}

//set loged in user
export const setCurrentUser = (decode) =>{
    return {
        type:SET_CURRENT_USER,
        payload:decode
    }
}