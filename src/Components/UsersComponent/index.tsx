import React from 'react';
import Button from 'react-bootstrap/Button';
import Highlight from "react-highlight-words";
// @ts-ignore
import ModalComponent from "../ModalComponent/index.tsx";

import './styles.scss';

interface IUsersComponent {
    name: string,
    username: string,
    website: string,
    company: {
        bs: string,
        catchPhrase: string,
        name: string,
    },
    email: string,
    id: number,
    filter: string,
    deleteUser: (id: number) => any,
}

const UsersComponent = (props: IUsersComponent) => {
    const {
        name,
        username,
        deleteUser,
        website,
        company,
        email,
        id,
        filter,
    } = props;

    return (
        <div className="user-card">
            <div>
                <Highlight
                    searchWords={[filter]}
                    autoEscape={true}
                    textToHighlight={name}
                ></Highlight>
            </div>
            <div>
                <Highlight
                    searchWords={[filter]}
                    autoEscape={true}
                    textToHighlight={username}
                ></Highlight>
            </div>
            <div>
                <Highlight
                    searchWords={[filter]}
                    autoEscape={true}
                    textToHighlight={email}
                ></Highlight>
            </div>
            
            <Button className='user-card__delete-btn' onClick={() => deleteUser(id)}>
                Delete
            </Button>
            <ModalComponent
                name={name}
                company={company}
                website={website}
            />
        </div>
    )
}

export default UsersComponent;