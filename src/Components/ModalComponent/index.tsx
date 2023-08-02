import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './styles.scss'; 

interface IModalComponent {
    name: string,
    website: string,
    company: {
        bs: string,
        catchPhrase: string,
        name: string,
    },
}

const ModalComponent = (props: IModalComponent) => {
    const {
        name,
        website,
        company,
    } = props;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='frame-card' role='button' onClick={handleShow}></div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='container'>
                        <div className='row m-4'>
                            <div className='col-lg-4 col-sm-12 p-1'>
                                Company: {company.name}
                            </div>
                            <div className='col-lg-4 col-sm-12 p-1'>
                                Website: {website}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalComponent;