import React, { useState } from "react";
import ProfileModalComponent from '../UserProfileUpdadteModal/ProfileModalComponent';

export default function ProfileUpdateButton() {

const [modalOpen,setModalOpen] = useState(false);

const closeModal = () => setModalOpen(false);

    return (
        <div className='post-status-main'>
            <div className='post-status'>
                <button className='open-post-modal' onClick={() => setModalOpen(true) }>Update Profile</button>
            </div>     
        <ProfileModalComponent modalOpen={modalOpen} closeModal={closeModal} />  
        </div>
    );
}