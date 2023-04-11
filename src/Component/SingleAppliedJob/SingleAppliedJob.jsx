import React from 'react';
import FilteredJob from '../FilteredJob/FilteredJob';


const SingleAppliedJob = ({jobs}) => {
    // const {company_logo, job_title, company_name, remote_or_onsite, location, salary} = job;
    console.log(jobs)
    return (
        <div className='container'>
            {
                jobs.map((job)=> <FilteredJob key={job.id} job={job}></FilteredJob>)
            }
        </div>
    );
};

export default SingleAppliedJob;