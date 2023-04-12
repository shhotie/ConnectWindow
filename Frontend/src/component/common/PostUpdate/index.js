import React, { useState } from "react";
import ModalComponent from '../Modal';
import ModalComponent1 from '../Modal/ModelComponent1';
import './index.scss';

export default function PostStatus() {

const [modalOpen,setModalOpen] = useState(false);
const [modalOpen1,setModalOpen1] = useState(false);

const closeModal = () => setModalOpen(false);
const closeModal1 = () => setModalOpen1(false);

    return (
        <div className='post-status-main'>
            <div className='post-status'>
                <button className='open-post-modal' onClick={() => setModalOpen(true) }>Start Posting</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='open-post-modal' onClick={() => setModalOpen1(true) }>Start Posting With Image</button>
            </div>     
        <ModalComponent modalOpen={modalOpen} closeModal={closeModal}  />
        <ModalComponent1 modalOpen={modalOpen1} closeModal={closeModal1}  />  
        </div>
    );
}