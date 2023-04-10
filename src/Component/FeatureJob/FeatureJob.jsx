import React, { useContext, useState } from 'react';
import { JobsContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';


const FeatureJob = () => {
    const jobs = useContext(JobsContext)
    const [showAll, setShowAll] =useState(false)
    const jobsToShow = showAll ? jobs : jobs.slice(0,4);
    console.log(jobsToShow)

    return (
        <div className='row gap-2 justify-content-center ms-2'>
            {
                jobsToShow.map((job)=>(
                    <div key={job.id} className='card col-5 p-3'>         
                        <img className='rounded w-100' src={job.company_logo} alt="" height="180px" />
                        <h4 className='mt-0'>{job.job_title}</h4>
                        <p>{job.company_name}</p>
                        <div className='d-flex gap-2 justify-content-center mb-1'>
                            <button className=''>Remote</button>
                            <button>Full Time</button>
                        </div>
                        <div className='d-flex gap-3 justify-content-center'>
                            <p><FontAwesomeIcon className='me-2' icon={faMapLocationDot}></FontAwesomeIcon>{job.location}</p>
                            <p>{job.salary}</p>
                        </div>
                        <button>View Details</button>
                    </div>
                )

                )
            }
            {
                !showAll && (
                    <button onClick={() => setShowAll(true)}>Show All</button>
                )
            }
        </div>
    );
};

export default FeatureJob;