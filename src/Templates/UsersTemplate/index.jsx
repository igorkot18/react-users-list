import { useEffect, useState, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import UsersComponent from "../../Components/UsersComponent/index.tsx";
import SpinnerComponent from "../../Components/SpinnerComponent/index.tsx";
import InputGroupComponent from "../../Components/InputGroupComponent/index.tsx";

import { addUsers, deleteUser } from "../../store/store.ts";

import { ToastContainer, toast } from 'react-toastify';

import { USERS_URL, TOAST_MESSAGES, TITLE } from "./constants.ts";

import 'react-toastify/dist/ReactToastify.css';
import './styles.scss'; 

export const UserContext = createContext();

const UsersTemplate = () => {
    const [isUpdate, setUpdate] = useState(true);
    const [isLoading, setLoading] = useState(false);
    const [filter, setFilter] = useState('');

    const dispatch = useDispatch();
    const usersList = useSelector(state => state.usersList);

    const addUsersList = (list) => {
        dispatch(addUsers(list));
    }

    const deleteUserFromList = (userId) => {
        dispatch(deleteUser(userId));
    }

    const filterList = (e) => {
        setFilter(e.target.value.trim())
    }

    const showToast = (info) => toast(info);

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            try {
                const response = await fetch(USERS_URL);
                const data = await response.json();
                if (data) {
                    addUsersList(data);
                    showToast(TOAST_MESSAGES.success);
                }
                else showToast(TOAST_MESSAGES.warning)
            } catch (error) {
                showToast(error.message);
            }
            setLoading(false);
        }

        getUsers();
    }, [isUpdate])

    return (
        <div className="users-list">
            <h2 className="users-list__title">{TITLE}</h2>
            {!isLoading && <InputGroupComponent
                onInputChange={(e) => filterList(e)}
                updateClick={() => setUpdate(!isUpdate)}
            />}
            {isLoading && <SpinnerComponent />}
            {usersList && usersList.filter(item => item.name.includes(filter) || item.username.includes(filter) || item.email.includes(filter))
                .map(({ id, name, username, phone, company, website, email }) => (
                <div key={id}>
                    <UsersComponent 
                        name={name}
                        username={username}
                        phone={phone}
                        company={company}
                        website={website}
                        email={email}
                        deleteUser={deleteUserFromList}
                        id={id}
                        filter={filter}
                    />
                </div>
            ))}
            {!usersList.length && !isLoading && <h4>No Users</h4>}
            <ToastContainer />
        </div>
    )
}

export default UsersTemplate;