import { faCircleDollarToSlot, faEnvelope, faLightbulb, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SingleJob = ({item}) => {
    return (
        <div>
            <div>Job Details</div>
            <div className='d-flex'>
                 <div>
                    <p><span className='fw-bold'>Job Description: </span>{item.job_description}</p>
                    <p><span className='fw-bold'>Job Responsibility: </span>{item.job_responsibility}</p>
                    <p><span className='fw-bold'>Educational Requirement: </span>{item.educational_requirements}</p>
                    <p><span className='fw-bold'>Experience: </span>{item.experiences}</p>
                 </div>
                 <div>
                    <h5>Job Details</h5>
                    <p><span className='fw-bold'><FontAwesomeIcon icon={faCircleDollarToSlot}></FontAwesomeIcon>Salary: </span>{item.salary}</p>
                    <p><span className='fw-bold'><FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon>Salary: </span>{item.job_title}</p>
                    <h5>Contact Information</h5>
                    <p><span className='fw-bold'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>Phone: </span>{item.contact_information.phone}</p>
                    <p><span className='fw-bold'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>Email: </span>{item.contact_information.email}</p>
                    <button className='btn btn-info fw-semibold text-white'>Apply Now</button>
                 </div>
            </div>
        </div>
    );
};

export default SingleJob;