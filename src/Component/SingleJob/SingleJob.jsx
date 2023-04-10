import { faCircleDollarToSlot, faEnvelope, faLightbulb, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SingleCard.css'

const SingleJob = ({item}) => {
    return (
        <div>
            <div className='coustomImg d-flex justify-content-center align-items-center fs-4 fw-bold'>Job Details</div>
            <div className='d-flex flex-column flex-md-row container mt-3 gap-2 align-items-center justify-content-center'>
                 <div className='px-2'>
                    <p><span className='fw-bold'>Job Description: </span>{item.job_description}</p>
                    <p><span className='fw-bold'>Job Responsibility: </span>{item.job_responsibility}</p>
                    <p><span className='fw-bold'>Educational Requirement: </span>{item.educational_requirements}</p>
                    <p><span className='fw-bold'>Experience: </span>{item.experiences}</p>
                 </div>
                 <div className='card p-4'>
                    <h5 className='fw-bold'>Job Details</h5>
                    <hr className='mt-0'/>
                    <p><span className='fw-bold'><FontAwesomeIcon className='me-1' icon={faCircleDollarToSlot}></FontAwesomeIcon>Salary: </span>{item.salary}</p>
                    <p><span className='fw-bold'><FontAwesomeIcon className='me-1' icon={faLightbulb}></FontAwesomeIcon>Salary: </span>{item.job_title}</p>
                    <h5 className='fw-bold'>Contact Information</h5>
                    <hr className='mt-0'/>
                    <p><span className='fw-bold'><FontAwesomeIcon className='me-1' icon={faPhone}></FontAwesomeIcon>Phone: </span>{item.contact_information.phone}</p>
                    <p><span className='fw-bold'><FontAwesomeIcon className='me-1' icon={faEnvelope}></FontAwesomeIcon>Email: </span>{item.contact_information.email}</p>
                    <button className='btn btn-info fw-semibold text-white'>Apply Now</button>
                 </div>
            </div>
        </div>
    );
};

export default SingleJob;