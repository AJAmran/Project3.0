import React from 'react';

const SingleAppliedJob = ({job}) => {
    const {company_logo, job_title, company_name, remote_or_onsite, location, salary} = job;
    return (
        <div>
            <img src={company_logo} alt="" />
            <h5>{job_title}</h5>
            <p>{company_name}</p>
            <button>{remote_or_onsite}</button>
            <p>{location}</p>
            <p>{salary}</p>
        </div>
    );
};

export default SingleAppliedJob;