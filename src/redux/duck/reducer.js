import { ADD_NEW_STUDENT, UPDATE_STUDENT, DELETE_STUDENT, SEARCH_STUDENT } from "./type";

const initialStudent = {
    studentArr : [
        {id: 1, name: "Nguyen Trong Huu", phone: "0123456789", email: "nguyenhuu@gmail.com"},
        {id: 2, name: "Nguyen Huu", phone: "0223456789", email: "nguyenhuu@gmail.com"}
    ],
    studentDefault: 
    {
        id: "",
        name: "",
        phone: "",
        email: "",
    },
    keyword: "",
    
}