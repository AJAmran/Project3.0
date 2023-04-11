import React from 'react';

const FilteredJob = ({job}) => {
    const {company_logo, job_title, company_name, remote_or_onsite, location, salary} = job;
    return (
        <div>
             <div className='d-flex  border gap-4 m-2 align-items-center rounded p-3'>
            <img src={company_logo} alt=""  height="150px" width="200px"/>
            <div className='w-50'>
            <h5>{job_title}</h5>
            <p>{company_name}</p>
            <button className='btn btn-outline-info'>{remote_or_onsite}</button>
            <div className='d-flex gap-3'>
            <p>{location}</p>
            <p>{salary}</p>
            </div>
            </div>
            <div className=''>
            <button className='btn btn-info h-25 fw-bold text-white'>View Details</button>
            </div>
            </div>
        </div>
    );
};

export default FilteredJob;