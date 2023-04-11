import React, { useContext, useState } from 'react';
import { CartContext, JobsContext } from '../../App';
import { getStoredCart } from '../../Utils/FeakDb';
import SingleAppliedJob from '../SingleAppliedJob/SingleAppliedJob';
import '../SingleAppliedJob/SingleAppliedJob'

const AppliedJobs = () => {
    const allJobs = useContext(JobsContext)
    const savedCart = getStoredCart()
    console.log(typeof(savedCart),allJobs.find(job=> job.id ===4));
    
    let cart = [];
   
    const data = Object.keys(savedCart).map((id)=>({
        id: parseInt(id),
        value: savedCart[id]
    }))
    console.log(data)
    const newArray = allJobs.filter(({id}) =>data.some(obj => obj.id === id))
    console.log(newArray);

    const [remoteJob, setRemoteJob] = useState([]);
    const [onSiteJob, setOnSiteJob] = useState(newArray)

    const handleRemoteJob = ()=>{
        const remoteJobArray = newArray.filter((job)=> job.remote_or_onsite === "Remote");
        setRemoteJob(remoteJobArray);
        setOnSiteJob([]);
    }
    const handleOnsiteJob = ()=>{
        const onSiteJobArray = newArray.filter((job)=> job.remote_or_onsite === "Onsite");
        setOnSiteJob(onSiteJobArray);
        setRemoteJob([]);
    }
    
    return (
        <div className='mb-5'>
            <div className='coustomImg d-flex align-items-center justify-content-center'>
            <h4>Applied Jobs</h4>
            </div>
            <div className='d-flex justify-content-end container gap-3'>
            <button onClick={handleRemoteJob} className='btn btn-outline-info fw-bold'>Remote job</button>
            <button onClick={handleOnsiteJob} className='btn btn-info fw-bold text-white me-2'>OnSite Job</button>
            </div>
            {/* {
                newArray.map((job) => <SingleAppliedJob key={job.id} job={job}></SingleAppliedJob>)
            } */}

            <SingleAppliedJob jobs = {onSiteJob.length > 0  && remoteJob.length ===0 ? onSiteJob : remoteJob.length>0
            ? remoteJob : job}></SingleAppliedJob>
        </div>
    );
};

export default AppliedJobs;