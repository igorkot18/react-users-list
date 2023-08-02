import { createStore } from "redux";

interface IUser {
    address: {
        city: string,
        geo: {
            lat: string,
            lng: string,
        }
        street: string,
        suite: string,
        zipcode: string,
    }
    company: {
        bs: string,
        catchPhrase: string,
        name: string,
    },
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string,
}

export const addUsers = (list: IUser) => {
    return {
        type: 'ADD_USERS',
        payload: list,
    } 
}

export const deleteUser = (id: number) => {
    return {
        type: 'DELETE_USER',
        payload: id,
    } 
}


const initialUsersList = {
  usersList: [],
}

export const usersReducer = (state = initialUsersList, {type, payload}) => {
switch (type) {
  case "ADD_USERS":
    return { ...state, usersList: payload }
  case "DELETE_USER":
    return { ...state, usersList: state.usersList.filter((item: IUser) => item.id !== payload) }
  default:
    return state;
  }
}

const store = createStore(usersReducer);

export default store;