import React, { useContext } from 'react';
import { CartContext, JobsContext } from '../../App';
import { getStoredCart } from '../../Utils/FeakDb';
import SingleAppliedJob from '../SingleAppliedJob/SingleAppliedJob';

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
    
    return (
        <div className='container'>
            <h1>this is applied job</h1>
            {
                newArray.map((job) => <SingleAppliedJob key={job.id} job={job}></SingleAppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;