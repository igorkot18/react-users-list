import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

interface IInputGroup {
    onInputChange: React.ChangeEventHandler<HTMLTextAreaElement>,
    updateClick: React.MouseEventHandler<HTMLButtonElement>,
}

function InputGroupComponent(props: IInputGroup) {
    const {
        onInputChange,
        updateClick,
    } = props;

    return (
        <InputGroup>
            <InputGroup.Text id="basic-addon1">
                <i className="bi bi-search"></i>
            </InputGroup.Text>
            <Form.Control
                placeholder='Type to search..'
                onChange={onInputChange}
            />
            <Button onClick={updateClick}>
                Reset
            </Button>
        </InputGroup>
    );
}

export default InputGroupComponent;