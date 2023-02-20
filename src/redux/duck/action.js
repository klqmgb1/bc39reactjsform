import { ADD_NEW_STUDENT, UPDATE_STUDENT, DELETE_STUDENT, SEARCH_STUDENT } from "./type";

export const addNewStudent = (student) =>{
    return {
        type: ADD_NEW_STUDENT,
        payload: student,
    }
}

export const upDateStudent = (student) =>{
    return {
        type: UPDATE_STUDENT,
        payload: student,
    }
}

export const deleteStudent = (id) =>{
    return {
        type: DELETE_STUDENT,
        payload: id,
    }
}

export const searchStudent = (key)=>{
    return {
        type: SEARCH_STUDENT,
        payload: key,
    }
}