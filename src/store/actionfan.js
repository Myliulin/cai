import {ADD_STU,DEL_STU} from './actionTypes';
export const ADD_STUDENT_CREATOR = (value)=>{
    
    return {
        type:ADD_STU,
        value
    }
}

export const DEL_STUDENT_CREATOR = (value) => {
    return {
        type:DEL_STU,
        value
    }
}